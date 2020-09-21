import React, {Component} from 'react';
//import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
//import Product from '../../container/product/Product';
import BlogPost from '../BlogPost/BlogPost';
//import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';

class Home extends Component {
    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Tutorial React JS - Bagian 1" 
                    desc="500x di tonton. 1 Minggu yang lalu"
                />
                <YoutubeComp 
                    time="5.11" 
                    title="Tutorial React JS - Bagian 2" 
                    desc="18x di tonton. 1 hari yang lalu"
                />
                <YoutubeComp 
                    time="4.20" 
                    title="Tutorial React JS - Bagian 3" 
                    desc="2x di tonton. 2 jam yang lalu"
                />
                <YoutubeComp 
                    time="11.12" 
                    title="Tutorial React JS - Bagian 4" 
                    desc="23.021x di tonton. 1 Tahun yang lalu"
                />
                <YoutubeComp/>
                <br/>
                <br/>
                <hr/>
                <p>Belanja Ayam</p>
                <hr/>
                <Product/>
                <br/>
                <br/>
                <hr/>
                <p>Life Cycle Component</p>
                <hr/>
                <LifeCycleComp/> */}

                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
            </div>
        );
    }
}

export default Home;