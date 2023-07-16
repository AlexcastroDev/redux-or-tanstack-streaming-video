import useUserService, { fetchUser } from '@/query-store/services/user'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

export default function Home() {
  const { data } = useUserService()
  return (
     <main>
      <nav style={{ display: 'flex', columnGap: 20, fontSize: 80 }}>
        <Link href="/">
          Home
        </Link>
        <Link href="/customers">
          Customers
        </Link>
        <Link href="/items">
          Items
        </Link>
      </nav>
       {JSON.stringify(data)}

      </main>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['user'], fetchUser)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}