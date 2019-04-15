import React from 'react';

const url = 'https://api.myjson.com/bins/rz0wi';

function Header(){
    return(
        <div className = 'header'>
            BLOG
        </div>
    )
}

function Footer(){
    return(
        <div className = 'footer'>
            <p>
                &copy;2019 COPYRIGHT.ALL RIGHT RESERVED
            </p>
        </div>
    )
}

function BlogGrid(props){
    return(
        <ul className = 'blogs'>
        {props.items.map((item,index)=>{
            return(
          <li key={item.id} className='blog-item'>
            <ul className='space-list-items'>
              <h3>{item.title}</h3>
              <p className='date'>{new Date().toDateString()}</p>
              <p>{item.body}</p>
              <a className='read'>READ MORE</a>
            </ul>
          </li>
            )
        })}
        </ul>
    )
}

class Instart extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoaded : false,
            items : []
        };
    }
componentDidMount() {
    fetch(url).then(res=>res.json())
    .then(
        (result)=>{
            this.setState({
                isLoaded:true,
                items:result
            });
        }
    )
}

    render(){
        const {isLoaded, items} = this.state;
        if(!isLoaded){
            return (
            <React.Fragment>
                   <Header />
                   <div>Loading...</div>
            </React.Fragment>            
            )
        } else {
            return (
                <React.Fragment>
                    <Header />
                    <BlogGrid items = {items} />
                    <Footer/>
                </React.Fragment>
                
            )
        }        
    }
}


export default Instart;