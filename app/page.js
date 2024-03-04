import Banner from './components/HomeComp/Banner';
import Category from './components/HomeComp/Category';
import NewArrival from './components/HomeComp/NewArrival';
import Sale from './components/HomeComp/Sale';
import Support from './components/HomeComp/Support';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Category />
      <NewArrival />
      <Support />
      <Sale />
    </>
  );
};

export default HomePage;
