
import Head from 'next/head'
import Header from "../components/Header";
import {Movie} from "../typings";
import requests from "../utils/requests";
import Banner from "../components/Banner";
import List from "../components/List";
import {useAuth} from "../contexts/AuthContext";
import UpComing from "../components/UpComing";


interface Props {
    upComing: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
}

const Home = (
    {
        upComing,
        actionMovies,
        comedyMovies,
        documentaries,
        horrorMovies,
        romanceMovies,
        topRated,
        trendingNow,
    }: Props
) => {
    // @ts-ignore
    const {user} = useAuth()

      return (
          <div className="relative h-screen -bg--body-color -z-0 h-[140vh] ">
              <Head>
                <title></title>
              </Head>
              <Header/>
              <main className="relative pl-[130px] py-[70px] space-y-24 flex fl">
                  <div className="space-y-24">
                      <Banner trendingNow={trendingNow}/>
                      <section className="space-y-16">
                          <List title="Top Rated" movies={topRated} />
                          <List title="Trending Now" movies={trendingNow} />
                          <List title="Action Thrillers" movies={actionMovies} />
                          <List title="Comedies" movies={comedyMovies} />
                          <List title="Scary Movies" movies={horrorMovies} />
                          <List title="Romance Movies" movies={romanceMovies} />
                          <List title="Documentaries" movies={documentaries} />
                      </section>
                  </div>
                  <UpComing movieList={upComing}/>
              </main>
          </div>
      )
}

export default Home

export const getServerSideProps = async () => {
    const [
        upComing,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
    ] = await Promise.all([
        fetch(requests.fetchUpComing).then((res) => res.json()),
        fetch(requests.fetchTrending).then((res) => res.json()),
        fetch(requests.fetchTopRated).then((res) => res.json()),
        fetch(requests.fetchActionMovies).then((res) => res.json()),
        fetch(requests.fetchComedyMovies).then((res) => res.json()),
        fetch(requests.fetchHorrorMovies).then((res) => res.json()),
        fetch(requests.fetchRomanceMovies).then((res) => res.json()),
        fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ])

    return {
        props: {
            upComing: upComing.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results,
        },
    }
}
