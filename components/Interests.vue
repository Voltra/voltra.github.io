<i18n lang="yaml">
fr:
  pianist: Je suis pianiste depuis l'âge de 7 ans. J'ai commencé en prenant des cours à
  musicSchool: l'école de musique d'Orvault.
  studentOf: J'ai ainsi été l'élève de
  stoppingPiano: |
    pendant 6 ans avant d'arrêter ma formation pour mieux
    me focaliser sur mes études. Après 2 ans sans pratique du piano, j'ai décidé
    de m'y remettre en commençant par
  moonlightSonata: le 1er mouvement de la sonate au Clair de Lune de Ludwig Van Beethoven (sonate n°14)
  pianoNowadays: |
    qui était le premier morceau que j'avais appris de moi-même.
    Mon répertoire est constitué aussi bien d'oeuvres classiques que de musiques
    contemporaines telles que des musiques
  fromVideoGames: de jeux vidéo
  fromMovies: de films
  fromAnime: d'animés
  orEven: ou encore
  fromSongs: de chansons diverses et variées
  playingAnInstrument: |
    La pratique d'un instrument de musique requiert de la concentration,
    de la discipline, de l'assiduité et de la maîtrise de soi&nbsp;; elle
    entraîne également le fait d'être plus exigeant envers soi-même.
  sinceTeen: Depuis l'adolescence, et encore plus après ma découverte des
  engineeringScience: sciences de l'ingénieur
  engineeringScienceUrl: https://fr.wikipedia.org/wiki/Sciences_de_l%27ing%C3%A9nieur
  newTech: |
     au lycée, j'ai un intérêt et une fascination toute
     particulière pour les nouvelles technologies. Après ma découverte de
     l'informatique, cette fascination n'a cessé de croître. Que ce soit des
     composants électroniques ou des nouveautés en terme d'ingénierie, j'apprécie
     tout particulièrement ce qui touche à la robotique et la mécanique en général,
     notamment dans le cadre de la
  statics: statique
  staticsUrl: https://fr.wikipedia.org/wiki/Principe_fondamental_de_la_statique
  orEvenThe: ou de la
  kinematics: cinématique
  kinematicsUrl: https://fr.wikipedia.org/wiki/Cin%C3%A9matique
  beyondMechanics: |
    Au-delà de la mécanique, j'ai un intérêt tout particulier
    sur les avancées des langages et outils de programmation. Je me tiens à jour
    très régulièrement par le biais des diverses
  conferences: conférences
  docs: |
    des documentations techniques ou tout simplement en
    parcourant les dépôts GitHub et paquets NPM à la recherche de nouveautés.
  listeningToMusic: |
    En plus de la pratique de la musique, j'apprécie tout particulièrement
    son écoute et son analyse (en utilisant mes restes de solfège). Je n'ai
    pas de style ou d'artistes favoris, je tombe généralement sur une oeuvre
    que j'apprécie en tant que tel et pas au sein d'un ensemble.
    Il m'arrive parfois, tel un professeur de français au lycée, de rêvasser
    à des significations quelconques qu'elles proviennent du texte ou de la
    structure musicale en elle-même. J'ai une appréciation toute particulière
    pour les arrangements orchestraux, certains sous-genres de l'electro ainsi que
    les musiques contemporaines suivant des structures classiques.
  loveForOpenSource: |
    Pendant mes études, j'ai développé un amour notable pour le monde de
    l'open source. Je développe
  myOwnTools: mes propres outils
  iBelieveIn: |
    depuis mes premiers pas
    en programmation, généralement pour résoudre des problèmes récurrents
    que je peux rencontrer. Je crois en une informatique libre, ouverte et
    gratuite où le profit et la visibilité seraient construits sur la composition
    et les réalisations logicielles plutôt que sur leurs composants individuels.
    Cela permettrait une meilleure appréhension, une forme d'uniformisation des ressources
    et sûrement un climat plus sain dans le milieu.

en:
  pianist: I've played the piano since I was 7. It all started by getting piano lessons at
  musicSchool: Orvault's Music School.
  studentOf: I was the student of
  stoppingPiano: |
    for 6 years before quitting to focus on my studies. After 2 years without touching a piano,
    I decided to get back to it by playing
  moonlightSonata: the 1st movement of Ludwig Van Beethoven's Moonlight Sonata (Sonata n°14)
  pianoNowadays: |
    which was the first piece I learned by myself. My Répertoire contains mostly classical pieces
    as well as some more contemporary pieces such as pieces
  fromVideoGames: from video games
  fromMovies: from movies
  fromAnime: from animés
  orEven: or even
  fromSongs: from songs
  playingAnInstrument: |
    Playing an instrument requires concentration, discipline, regularity and a lot of self-control;
    it also makes you more demanding on yourself.
  sinceTeen: Since my teenage years, and after discovering
  engineeringScience: Engineering Physics/Science
  engineeringScienceUrl: https://en.wikipedia.org/wiki/Engineering_physics
  newTech: |
     in High School, I've had an interest in, and a fascination for, new technologies.
     After discovering Computer Science, that fascination never ceased to grow.
     I have a very specific love for things related to mechanics and robotics, especially
     when it comes to
  statics: Statics
  staticsUrl: https://en.wikipedia.org/wiki/Statics
  orEvenThe: or even
  kinematics: Kinematics
  kinematicsUrl: https://en.wikipedia.org/wiki/Kinematics
  beyondMechanics: |
    Beyond Mechanics, I have a very keen interest in advances in programming languages
    and tools. I keep myself up to date regurlary via
  conferences: conferences
  docs: |
    technical specifications, documentation or even simply browsing GitHub repos and NPM packages
    looking for interesting tools.
  listeningToMusic: |
    Moreover, in addition to playing the piano, I particularly appreciate
    listening and analyzing music (using the remnants of my knowledge of Music Theory).
    I don't have a favorite style or artists, I usually stumble across a piece
    that I enjoy as it is and not as part of a set of pieces.
    Sometimes, like an English teacher in High School, I daydream about
    what a piece means, whether that meaning comes from the lyrics or from
    the musical structure itself. I particularly fond of orchestral transcriptions,
    sub-genres of Electro as well as contemporary music that follow classical music's structure.
  loveForOpenSource: |
    During my studies, I have developed a love for the Open Source world. I've been creating
  myOwnTools: my own tools
  iBelieveIn: |
    since my first steps as a programmer, mostly to solve my own recurring problems.
    I firmly believe in a free, open and libre Computer Science where profit and visibility
    would be built via composition of software instead of their individual components.
    That would allow for an easier entry, vulgarization, a sort of uniformisation
    of resources,  as well as, hopefully, making the field saner.
</i18n>

<template>
	<a-card :bordered="false">
		{{ $t('pianist') }}
		<ExternalLink href="https://www.orvault.fr/culture-sport-tourisme/culture/musiques/origami-ecole-municipale-des-musiques-dorvault">
			{{ $t('musicSchool') }}
		</ExternalLink>{{ $t('studentOf') }}
		<ExternalLink href="https://www.guychazelle-piano.fr/">
			Guy Chazelle
		</ExternalLink>{{ $t('stoppingPiano') }}
		<ExternalLink href="https://www.youtube.com/watch?v=sbTVZMJ9Z2I">
			{{ $t('moonlightSonata') }}
		</ExternalLink> {{ $t('pianoNowadays') }}
		<ExternalLink href="https://www.youtube.com/watch?v=FXZpadBkdS8">
			{{ $t('fromVideoGames') }}
		</ExternalLink>,
		<ExternalLink href="https://www.youtube.com/watch?v=3oSPcj1lcF8">
			{{ $t('fromMovies') }}
		</ExternalLink>,
		<ExternalLink href="https://www.youtube.com/watch?v=Xqr9rICvaDg">
			{{ $t('fromAnimes') }}
		</ExternalLink> {{ $t('orEven') }}
		<ExternalLink href="https://www.youtube.com/watch?v=3b3EwEEXL5s">
			{{ $t('fromSongs') }}
		</ExternalLink>.
		<span v-html="$t('playingAnInstrument')"/><br/>
		<br/>

		{{ $t('sinceTeen') }}
		<ExternalLink :href="$t('engineeringScienceUrl')">
			{{ $t('engineeringScience') }}
		</ExternalLink> {{ $t('newTech') }}
		<ExternalLink :href="$t('staticsUrl')">
			{{ $t('statics') }}
		</ExternalLink>{{ $t('orEvenThe') }}
		<ExternalLink :href="$t('kinematicsUrl')">
			{{ $t('kinematics') }}
		</ExternalLink>. {{ $t('beyondMechanics') }}
		<ExternalLink href="https://www.youtube.com/watch?v=u_ij0YNkFUs">
			{{ $t('conferences') }}
		</ExternalLink>, {{ $t('docs') }}<br/>
		<br/>

		{{ $t('listeningToMusic') }}<br/>
		<br/>

		{{ $t('loveForOpenSource') }}
		<ExternalLink href="https://github.com/Voltra">
			{{ $t('myOwnTools') }}
		</ExternalLink>{{ $t('iBelieveIn') }}
	</a-card>
</template>

<script>
	import ExternalLink from "@/components/ExternalLink"

	export default {
		components: {
			ExternalLink,
		},
	}
</script>
