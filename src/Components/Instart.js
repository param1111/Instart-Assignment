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
            let itemLength = item.body.split('\n').length - 1;
            return(
          <li key={item.id} className='blog-item'>
            <ul className='space-list-items'>
              <h3>{item.title}</h3>
              <p className='date'>{new Date().toDateString()}</p>
              {item.body.split('\n').map((data, index) => 
                  <p className={`${index ===  itemLength ? 'blog-text' : null}`}>{data}</p>
              )}
            </ul>
            <div className='read'>
                <a >READ MORE</a>
            </div>
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