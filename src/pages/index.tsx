import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import css from '../css/pages/Home.module.css';

interface HomeProps {
  MoveItLevel: number;
  MoveItCurrentExperience: number;
  MoveItChallengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      MoveItLevel={props.MoveItLevel}
      MoveItCurrentExperience={props.MoveItCurrentExperience}
      MoveItChallengesCompleted={props.MoveItChallengesCompleted}
    >
      <div className={css.container}>
        <Head>
          <title>Move It</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    MoveItLevel,
    MoveItCurrentExperience,
    MoveItChallengesCompleted,
  } = ctx.req.cookies;

  return {
    props: {
      MoveItLevel: Number(MoveItLevel),
      MoveItCurrentExperience: Number(MoveItCurrentExperience),
      MoveItChallengesCompleted: Number(MoveItChallengesCompleted),
    },
  };
};
