import React from 'react'
import Layout from '../../components/Layout'
import BookingTabs from '../../components/BookingTabs'
import Fetch from '../../components/UserDetails/fetch'

const Site = () => {
    return (
        <Layout>
            <BookingTabs />
            <Fetch />
        </Layout>
    )
}

export default Site;
