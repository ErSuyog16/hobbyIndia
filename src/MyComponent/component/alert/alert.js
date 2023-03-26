import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Alrt=(props)=>{
    return(
        <div className="alert alert-primary" role="alert">
    {props.txt}
</div>
    )
}

export default Alrt;