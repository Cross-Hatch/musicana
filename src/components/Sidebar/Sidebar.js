import SidebarOptions from '../SidebarOptions/SidebarOptions';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from '../../DataLayer';

function Sidebar() {
  const [{playlist}, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' ></img>
      <SidebarOptions Icon={HomeIcon} title="Home"/>
      <SidebarOptions Icon={SearchIcon} title="Seearch"/>
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>

      <br />
      <strong className='sidebar_title'>PLAYLIST</strong>
      <hr />

      {playlist?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name}/>
      ))}
    </div>
  )
}

export default Sidebar