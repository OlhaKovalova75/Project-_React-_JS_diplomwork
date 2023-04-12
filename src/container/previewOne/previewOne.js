import Logo from "../../components/Logo/logo";
import lenovo from "../../assets/image/lenovo.png";
import patch from "../../assets/favicon/patch.svg";
import "./previewOne.css";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

const PreviewOne = ({ productOne }) => {
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate("/Preview");
  };

  return (
    <div className="container_description">
      <div className="preview_one-container">
        <div className="logo_preview_one">
          {" "}
          <Logo />
        </div>

        <div className="preview_one_block">
          <div className="preview_one_main">
            <div className="preview_one_title">
              {" "}
              <BsArrowLeft className="arrow" onClick={navigateToBack} />
              <h2>Ноутбук Lenovo Y50-70 Aluminum Black</h2>
            </div>

            <div className="preview_one_data">
              <img src={lenovo} alt="lenovo" />
              <div className="data">
                <div className="patch_block">
                  <img src={patch} alt="lenovo" />
                  <h4>Є в наявності</h4>
                </div>
                <span>
                  <h4 className="price">25000UAH</h4>
                  <h5>Кількість: 5</h5>
                </span>
              </div>{" "}
            </div>
            <div className="description-block">
              <div className="preview_one_title">
                <h2>
                  Oпис <span></span>
                </h2>
              </div>
              <div className="description_main">
                <p className="description">
                  15.6-дюймовий дисплей стандарту Full HD
                  <br /> Фільми, малюнки та ігри немов оживають на дисплеї
                  стандарту Full HD (1920 x 1080).
                </p>
                <p className="description">
                  Динаміки преміум-класу
                  <br /> Стереофонічні динаміки JBL, що забезпечують розкішне
                  звучання з ефектом присутності, ідеально підходять для відео,
                  ігор і музики.{" "}
                </p>
                <p className="description">
                  {" "}
                  Dolby Advanced Audio <br />
                  Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці
                  можна відтворити кришталево чіткий просторовий звук за
                  допомогою вбудованих динаміків.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewOne;
