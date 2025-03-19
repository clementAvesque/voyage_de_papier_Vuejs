<script>
export default {
    name: 'Home',
};
</script>

<template>
    <div>
        <section id="crea">
            <p>Chez Voyage De Papier, nous vous invitons à redécouvrir l’histoire sous un nouvel angle. Offrez un
                journal
                personnalisé qui vous plonge dans une époque, tout en ajoutant une touche unique grâce à des souvenirs,
                des
                anecdotes et des messages qui rendent chaque page inoubliable.</p>

            <button>Créer votre journal</button>
        </section>
        <section id="story">
            <u>
                <h2>Notre histoire</h2>
            </u>

            <p>Notre projet est né d’un souvenir précieux : celui de nos grands-parents qui, chaque matin, allaient
                acheter le pain et le journal. Ces moments de partage et de découverte des nouvelles du jour nous ont
                marqués à jamais.<br>
                <br>
                Avec Voyage De Papier, nous avons voulu recréer cet instant nostalgique en offrant un journal
                personnalisé, permettant à chacun de revivre une époque et de la partager d’une manière unique.<br>
                <br>

                Chaque journal est une capsule temporelle, une manière de revivre le passé tout en y ajoutant votre
                propre touche.<br><br>

                Nous espérons que nos journaux deviendront des souvenirs précieux, aussi personnels et significatifs que
                ceux que nous avons partagés avec nos grands-parents.
            </p>
            <img src="/img/hibous_transi.svg" alt="image de décor">
        </section>
        <section id="personnal">
            <u>
                <h2>La personnalisation en<br>3 étapes</h2>
            </u>
            <div class="box">
                <h3>1.Choisissez un année</h3>
                <p>Commencez par sélectionner une année entre 2000 et 2010. Cette date correspondra au contexte
                    historique et aux événements marquants de cette période. Idéal pour un anniversaire, un souvenir de
                    jeunesse ou simplement une touche nostalgique</p>
                <div class="ViewSlider">
                    <div class="Slider">
                        <p>2000</p>
                        <p>2001</p>
                        <p>2002</p>
                        <p>2003</p>
                        <p>2004</p>
                        <p>2005</p>
                        <p>2006</p>
                        <p>2007</p>
                        <p>2008</p>
                        <p>2009</p>
                        <p>2010</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <h3>2.sélectionnez un thème</h3>
                <p>Ensuite choisissez le thème, il est temps de personnaliser encore plus votre journal en sélectionnant
                    un thème parmi ceux proposés. Chaque thème regroupe des articles et anecdotes marquants de l’époque,
                    adaptés aux passions et centres d’intérêt de la personne à qui vous souhaitez offrir ce cadeau.</p>
                <div class="ViewSlider">
                    <div class="Slider">
                        <p>2000</p>
                        <p>2001</p>
                        <p>2002</p>
                        <p>2003</p>
                        <p>2004</p>
                        <p>2005</p>
                        <p>2006</p>
                        <p>2007</p>
                        <p>2008</p>
                        <p>2009</p>
                        <p>2010</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <h3>3. Personnalisez la dernière page</h3>
                <p>La dernière étape de personnalisation est dédiée à la touche finale qui rendra le journal encore plus
                    spécial. Vous pouvez ajouter une photo de la personne à qui le journal est destiné, ainsi qu’un mot
                    personnel, une anecdote, une histoire ou même un poème. Cette page est l'occasion parfaite de
                    partager un souvenir intime, un message touchant ou une pensée particulière, pour offrir un cadeau
                    vraiment unique et émotionnel.</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.ViewSlider {
    height: 20%;
    width: 50vw;
}

.Slider {
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 50px;
    font-family: "Cormorant Garamond";
    color: white;
    font-size: 100%;

}



.box {
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: rgba(66, 19, 24, 1);
    border-radius: 40px;
    margin: 100px;
}

#personnal .box p {
    font-size: 24pt;
    font-family: "Cormorant Garamond";
    color: white;
}

#personnal .Slider p {
    font-size: 40pt;
}

.Slider::-webkit-scrollbar {
    display: none;
    /* Masque la barre de défilement */
}

/* Compatibilité avec les autres navigateurs */
.Slider {
    -ms-overflow-style: none;
    /* Masque la barre de défilement pour Internet Explorer */
    scrollbar-width: none;
    /* Masque la barre de défilement pour Firefox */
}

#personnal .box h3 {
    font-size: 40pt;
    font-family: "Cormorant Garamond";
    color: white;
}

#personnal {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
}

#personnal h2 {
    font-size: 48pt;
    font-family: "Cormorant Garamond";
    text-align: center;
}

#story img {
    margin-top: 50px;
    margin-bottom: 100px;
    width: 105vw;
}

#crea button {
    margin-top: 20vh;
    height: 80px;
    background-color: rgba(66, 19, 24, 1);
    font-family: "Cormorant Garamond";
    padding: 20px;
    border-radius: 20pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48pt;
    border: none;
    color: white;
}

.cormorant-garamond {
    font-family: "Cormorant Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
}

#crea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 30vh;
}

#story {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
}

#story p {
    font-size: 24pt;
    width: 80vw;
    font-family: "Cormorant Garamond", serif;
    font-weight: 600;
}

#story h2 {
    font-size: 56px;
    font-family: "Cormorant Garamond";
}



#crea p {
    width: 80vw;
    font-size: 24pt;
    font-family: "Cormorant Garamond";
    text-align: center;

}
</style>
