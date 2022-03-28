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
      selected_content_id:1,
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
      for(let i = 0; i < this.state.contents.length; i++){
        let data = this.state.contents[i];
        if(data.id = this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
        }
        break;
      }  
    }
    return (
      <div className="App">
          <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage= {function(){
           this.setState({mode:"welcome"});
          }.bind(this)}
          />
          {/* <header>
            <h1><a href="/" onClick={
              function(e){
                // console.log(e);
                // e.preventDefault();  <--기본동작 방지. false를 반환해도 기본동작을 정지 할 수 없음.
                
                // bind 이후에도 this.state.mode= "welcome";  <--안됨. state의 값이 바뀌는지 모르기 때문. 그래서 setstate를 씀.
                this.setState({
                  mode: "read"
                });
                // bind => 아래의 this.state에서 this가 위의 함수안에서는 자기자신 또는 어떤 값이든 아직 명시 되지 않아서. this가 뭔지 몰라서 undefinded 나올 때 씀.
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
          </header> */}
          <List
          onChangePage={function(id){
            this.setState({
              mode:"read",
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}/>
          <Foot title={_title} desc={_desc}/>
      </div>
    );
  }
}



export default App;
