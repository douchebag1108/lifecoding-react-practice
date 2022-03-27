import React, {Component} from 'react';
import Subject from './components/Subject';
import List from './components/List';
import Foot from './components/Foot';

// class format
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:"welcome",
      subject:{title:'WEB', sub:"World Wide Web!"},
      welcome:{title:"Base result", desc:"Hello, React~!"},
      contents: [
        {id:1, title:"This is idx = 0 result", desc:"how amazing!"},
        {id:2, title:"css", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScirpt is for interactive"},
      ]
    }
  }
  // props || state가 바뀌면 리렌더링, 컴포넌트들도 다 리렌더링.
  render() {
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
          <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}/>
          <List
          data={this.state.contents}/>
          <Foot title={_title} desc={_desc}/>
      </div>
    );
  }
}



export default App;
