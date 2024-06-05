
import React from 'react'
import Card from '@mui/material/Card';


export default function Header({OpenSidebar}) {
  return (
    <Card>
  
    <header className='mainn-header'>
        <div className='menu-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.558 5.534a2.25 2.25 0 0 0-3.116 0l-4.626 4.44a.748.748 0 0 0-.218.405a27.344 27.344 0 0 0-.121 9.15l.112.721h2.977v-6.211a.75.75 0 0 1 .75-.75h5.368a.75.75 0 0 1 .75.75v6.211h2.977l.112-.72a27.34 27.34 0 0 0-.12-9.151a.748.748 0 0 0-.219-.405zM9.404 4.452a3.75 3.75 0 0 1 5.192 0l4.627 4.44c.34.326.57.752.655 1.216a28.86 28.86 0 0 1 .127 9.653l-.18 1.157a.983.983 0 0 1-.972.832h-4.169a.75.75 0 0 1-.75-.75v-6.211h-3.868V21a.75.75 0 0 1-.75.75H5.147a.983.983 0 0 1-.972-.832l-.18-1.157a28.86 28.86 0 0 1 .127-9.653c.085-.464.315-.89.655-1.217z" clip-rule="evenodd"/></svg>Home
        </div>
        <div className='header-right'>  
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5" fill="currentColor"/><path fill="currentColor" d="M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68a2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29a2.14 2.14 0 0 0-1.68.12a2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86a2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77a1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93M12 15.5a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"/></svg>
         </div>
        </div>
        
    </header>
    </Card>
  )
}

// export default Header