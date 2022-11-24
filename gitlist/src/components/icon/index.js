import ArrowDown from "./arrow-down";
import Book from "./book";
import Branch from "./branch";
import Cancel from "./cancel";



function Index({name,...props}) {
    switch (name){
        case 'arrowDown' :{
            return <ArrowDown {...props}/>
        }
        default :{
            return null
        }
    }
}

Index.defaultProps = {
    size: 16,
    color: 'white',
}
export default Index
