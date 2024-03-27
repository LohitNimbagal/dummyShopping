import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Loading } from './Loading';

function Protected({ children, authentication = true }) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoading(false)

    }, [authStatus, authentication, navigate])

    return loading ? <Loading /> : <>{children}</>
}

export default Protected