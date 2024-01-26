import { Router } from '@/presentation/components'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/presentation/styles/global.scss'
import { makeLogin } from '@/main/factories/pages'

ReactDOM.createRoot(document.getElementById('main')!).render(<Router makeLogin={makeLogin} />)
