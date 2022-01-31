import {useSelector, useDispatch} from 'react-redux';
import { 
    editService,
    removeService,
    clearServiceField,
 } from "../actions/actionCreators";

 export default function ServiceList() {
    const item = useSelector((state) => state.serviceList);
    const item2 = useSelector((state) => state.serviceAdd);
    const dispatch = useDispatch();
  
    const filteredList = item.services.filter(({ name }) => {
      return name.toLowerCase().includes(item2.filter.toLowerCase());
    });
  
    const onServiceRemove = (id) => {
      dispatch(removeService(id));
      if (id === item.selected) {
        dispatch(clearServiceField());
      }
    }
  
    const onServiceEdit = (id) => {
      const edited = item.services.find((s) => s.id === id);
      dispatch(editService(edited.name, "" + edited.price, id));
    }
  
    return (
      <div className='list_container'>
        <h3>Service List</h3>
          {filteredList.length === 0 ? 'Нет сервисов' :
          filteredList.map((service) => (
            <div className='servise__list__row' key={service.id}>
              <ul>
                <li>
              <span className="row_name">{service.name}</span>
              <span className="row_price">{service.price}</span>
              </li>
              </ul>
              <div className='btn_box'>
                <button onClick={() => onServiceEdit(service.id)}>
                  <span className='material-icons'>edit</span>
                </button>
                <button onClick={() => onServiceRemove(service.id)}>
                  <span className='material-icons'>delete</span>
                </button>
              </div>            
            </div>
          ))}
      </div>
    );
  }
