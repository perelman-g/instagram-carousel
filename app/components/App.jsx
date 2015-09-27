import { Reapp, React, View, Button, Input, Gallery} from 'reapp-kit'
import superagent from 'superagent';
require('superagent-jsonp')(superagent);

const access_token='YOUR_INSTAGRAM_API_ACCESS_TOKEN';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {photos: []}
  }

  handleSearch(e) {
    let self = this
    let tag = this.refs.search.getDOMNode().value;
    let searchUrl=`https://api.instagram.com/v1/tags/${tag}/media/recent?access_token=${access_token}`;
    console.log(">< searchUrl", searchUrl)

    superagent
    .get(searchUrl).jsonp()
    .end(function(err, res){
      console.log(res);
      if (! (res.body.meta.code === 200 && res.body.data)) return;
      self.setState({
        photos: res.body.data.map(function(image){
          return image.images.standard_resolution.url;
        })
      });
    })
  }

  render() {
    let { photos } = this.state;
    return (
      <View title="instagram tag carousel">
        <Input ref="search" placeholder="Enter tag" value='minpin' styles={{
            input: {
              margin: '0 0 10px 0'
            }
          }} />
          <Button onTap={this.handleSearch.bind(this)}>Search Images</Button>
          <div className="verticalCenter">
            {!photos.length && <p>No photos!</p>}
            {!!photos.length &&
              <Gallery
                onClose={() => this.setState({ photos: [] })}
                images={photos}
                width={window.innerWidth}
                height={window.innerHeight - 44}
                />
            }
          </div>
        </View>
      )
    }
  }

  export default Reapp(App)
