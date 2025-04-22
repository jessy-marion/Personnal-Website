import Card from "../../Components/Card/Card";
import styles from "./TSSR.module.scss";
import DP1 from "../../datas/pdf/1_DP_TSSR_GLPI.pdf";
import DP2 from "../../datas/pdf/2_DP_TSSR_WinServ_ADDS.pdf";
import dp1Img from "../../assets/img/glpi.jpg"
import dp2Img from "../../assets/img/windows_server.png"

function TSSR() {
return (
    <main className={styles.tssr}>
        <h1>Dossier professionnel de la formation TSSR</h1>
        <div className={styles.dpContainer}>
        <a href={DP1}
                target="_blank"
                rel="noreferrer noopener"
                >
                    <Card h2={"GLPI"}
                    image={dp1Img}
                    >
                        GLPI est une solution open source de gestion des services informatiques.
                        <strong> Installation du serveur</strong>
                    </Card>
            
        </a>
        <a href={DP2}
                target="_blank"
                rel="noreferrer noopener"
                >
                    <Card h2={"Windows Server & Active Directory"}
                    image={dp2Img}
                    >
                        Installation de <strong>Windows Server</strong> et du service <strong>Active Directory</strong>.
                    </Card>
            
        </a>
        </div>
    </main>
    
);
}

export default TSSR;
//le href doit etre modifié pour la carte windows server