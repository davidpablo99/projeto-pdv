import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import router from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <Theme>
    <RouterProvider router={router}/>
  </Theme>
)
