import { useParams, Navigate } from "react-router-dom";
import DataFichLogement from "../../datas/logement.json";
import Tag from "./Tag";
import Collapse from "../collapse/Collapse";
import Carrousel from "./Carrousel";
import Rate from "./Rate";
import Host from "./Host";

const FicheLogementDisplay = () => {
  // Récupère l'id depuis l'URL
  const { id } = useParams();

  // Recherche la fiche logement correspondant à l'id
  const ficheLogement = DataFichLogement.find((logement) => logement.id === id);

  // Si aucune fiche n'est trouvée, rediriger vers la page 404
  if (!ficheLogement) {
    return <Navigate replace to="/404" />;
  }

  // Tags
  const tagsLogement = ficheLogement?.tags.map((tags, i) => (
    <Tag key={i} nom={tags} />
  ));

  // Équipements
  const equipements = ficheLogement?.equipments.map((equipment, i) => (
    <ul key={i}>
      <li>{equipment}</li>
    </ul>
  ));

  return (
    <div className="Fiche-container">
      <Carrousel slides={ficheLogement?.pictures} />
      <section className="Fiche-logement">
        <div className="description-info">
          <div className="description-info__titletags">
            <div className="description-info__titletags__title">
              <span className="titre-logement">{ficheLogement?.title}</span>
              <span className="endroit-logement">
                {ficheLogement?.location}
              </span>
            </div>
            {/* Tags */}
            <div className="description-info__titletags__tags">
              {tagsLogement}
            </div>
          </div>

          <div className="description-info__proprietaire">
            {/* Hosting */}
            <div className="description-info__proprietaire__nom-prop">
              <Host
                name={ficheLogement?.host.name}
                picture={ficheLogement?.host.picture}
              />
            </div>
            {/* Rating */}
            <div className="description-info__proprietaire__rate">
              <Rate score={ficheLogement.rating} />
            </div>
          </div>
        </div>
      </section>
      {/* Collapse */}
      <div className="description-centent">
        <div className="description-centent__description">
          <Collapse
            title="Description"
            content={ficheLogement?.description}
          />
        </div>
        <div className="description-centent__equipement">
          <Collapse title="Équipements" content={equipements} />
        </div>
      </div>
    </div>
  );
};

export default FicheLogementDisplay;
