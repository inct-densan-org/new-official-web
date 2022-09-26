import type { NextPage, NextPageWithLayout } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '~/layouts/Layout'
import styles from '../styles/Home.module.css'

const Index: NextPageWithLayout  = () => {
  return <>
    <div>asd</div>
  </>
}

Index.getLayout = (page) => <Layout metaTitle='INDEX'>{ page }</Layout>

export default Index
