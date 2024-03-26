import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Loading } from './ui/Loading';

function Protected({ children, authentication = true }) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }
        setLoading(false)

    }, [authStatus, authentication, navigate])

    return loading ? <Loading /> : <>{children}</>
}

export default Protected