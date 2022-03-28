import React, {Component} from 'react';


class List extends Component {
    render(){
      var lists = [];
      var data = this.props.data;
      // var i = 0;
      // while(i < data.length){
      //   lists.push(<li key={data[i].id}>
      //     <a href={"/content /"+data[i].id}>{data[i].title}</a>
      // </li>);
      //   i = i + 1 ;
      // }
      for(let i = 0; i< data.length; i++){
        lists.push(
        <li key={data[i].id}>
          <a href={"/Foot/"+data[i].id}
          data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}>
            {data[i].title}
          </a>
        </li>);
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default List;