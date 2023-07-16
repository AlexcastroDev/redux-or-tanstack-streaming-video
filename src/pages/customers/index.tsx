import useUserService from "@/query-store/services/user"

export default function Page() {
    const { data } = useUserService(true)

    return (
        <div>
            <h1>customers</h1>
            <span>
                {JSON.stringify(data)}
            </span>
        </div>
    )
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//     return {
//       props: {
//         preloadedState: {
//           user: {
//             id: '1',
//             updated_at: new Date('2023-07-16').getTime(),
//             name: 'test'
//           }
//         }
//       }
//     }
//   }