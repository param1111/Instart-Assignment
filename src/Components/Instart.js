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
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.title}
                                {item.body}
                            </li>
                        ))}
                    </ul>
                    <Footer/>
                </React.Fragment>
                
            )
        }        
    }
}


export default Instart;