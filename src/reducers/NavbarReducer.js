import nav from '../components/Sidebar/_nav';
import nav2 from '../components/Sidebar/_navCompanies';
export default function(state={},action) {
    switch(action.type) {
        case 'CHANGE_OPTIONS':
            if(action.payload === 'data') return nav
            if(action.payload === 'companies') return nav2;
        default:
            return nav
    }
}