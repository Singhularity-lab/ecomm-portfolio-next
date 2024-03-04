import Banner from './components/HomeComp/Banner';
import Category from './components/HomeComp/Category';
import NewArrival from './components/HomeComp/NewArrival';
import Support from './components/HomeComp/Support';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <NewArrival />
      <Support />
    </div>
  );
};

export default HomePage;
