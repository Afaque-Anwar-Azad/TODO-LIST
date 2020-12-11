import react,{Component} from 'react';
import App from './App';
import './ListItems.css';


class ListItems extends Component{
    render(){
        const items=this.props.items;
        return(
            <div>
                {
                    items.map((val,i)=>{
                        return <div className='note-card' key={val.key}>
                            {val.text}
                        </div>
                    })
                }
            </div>

        );
    }
}

export default ListItems;