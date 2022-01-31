import { useSelector, useDispatch } from "react-redux";
import { 
    changeServiceField,
    addService,
    clearServiceField,
    cancelEdit,
    clearSearch,
 } from '../actions/actionCreators';

export default function ServiceAdd() {
    const item = useSelector((state) => state.serviceAdd);
    const item2 = useSelector((state) => state.serviceList);
    const dispatch = useDispatch();
    
    const onFieldChange = (e) => {
        const { name, value } = e.target;
        dispatch(changeServiceField(name, value)); 
      }
    
      const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addService(item.name, item.price));
        dispatch(clearServiceField());
      }
    
      const onFormReset = (e) => {
        e.preventDefault();
        dispatch(clearServiceField());
      }
    
      const onEditCancel = (e) => {
        dispatch(cancelEdit());
        dispatch(clearServiceField());
      }
    
      const onClearSearch = (e) => {
        dispatch(clearSearch());
      }
    
      return (
        <form onReset={onFormReset}>
          <h2>editing</h2>
          <div className='box-input'>
          <div className='input_row'>
            <input name="name" id="name"
              onChange={onFieldChange} 
              value={item.name}
              placeholder='Service name'/>
          </div>
    
          <div className='input_row'>
            <input name="price" id="price"
              type='number'
              onChange={onFieldChange} 
              value={item.price}
              placeholder='Service price'/>
          </div>     
    
          <div className="btn_row">
            <button type="submit"
              className={`form_btn${!item.name.trim() || !item.price.trim() ? ' inactive' : ''}`}
              onClick={onFormSubmit}>Save</button>
            <button type="reset"
              className={`form_btn${!item.name.trim() || !item.price.trim() ? ' inactive' : ''}`}
              >Clear</button>
    
            <button type="button"
              onClick={onEditCancel}
              className={`form_btn${!item2.selected ? ' hidden' : ''}`}
              >Cancel</button>
          </div>
          </div>
          
          <h2>filter</h2>
          <div className='input_row search_row'>
            <label htmlFor="filter">
              <span className='material-icons'>search</span>
            </label>        
            <input name="filter" id="filter"
              onChange={onFieldChange}
              value={item.filter}
              placeholder='Search service'/>
              <span className={`material-icons clear${!item.filter.trim() ? ' inactive' : ''}`} 
                onClick={onClearSearch}>clear</span>
          </div>
        </form>
      );
    }
