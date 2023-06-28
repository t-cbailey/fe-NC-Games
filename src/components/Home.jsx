import '../../Styling/home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/reviews')
  }

  return (
    <>
      <section className="welcomeSplash" onClick={handleClick}>
        <h2 className="welcomeText">Welcome</h2>
        <h3 className="welcomeSubText">to NC Games</h3>

      </section>
    </>
  );
}

export default Home;
