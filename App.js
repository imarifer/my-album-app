import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Favorite Album</Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={require('./assets/images/albumW.jpeg')} style={styles.image} />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description}>
          El album Wings de BTS es mi álbum favorito dado que representa una transición entre
          el despertar en la juventud a la madurez, explorando una gran crisis psicologica explorando 
          temas, tales como las tentaciones, dificultades, entendimiento de la dualidad, cada uno de ellos
          plasmado en cada uno de los sencillos. 
          Este álbum se cree que está altamente inspirado en la obra literaria "Demian" de Hermann Hesse.
        </Text>
      </View>
      <View style={styles.containerCreator}>
        <Text style={styles.creator}>by @im_arifer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#630D16',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
  },
  containerTitle: {
    height: 'auto',
    width: '80%',
    borderWidth: 2,
    alignItems: 'center',
    padding: 2,
    borderRadius: 15,
    borderColor: '#4A6D7C',
  },
  textTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D1D5DB',
  },
  containerImage: {
    height: '30%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
  containerDescription: {
    height: 'auto',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#4A6D7C',
    borderRadius: 15,
  },
  description: {
    textAlign: 'justify',
    color: '#D1D5DB',
    fontSize: 18,
  },
  containerCreator: {
    height: 'auto',
    width: '60%',
    borderWidth: 2,
    borderColor: '#4A6D7C',
    borderRadius: 15,
  },
  creator: {
    textAlign: 'center',
    color: '#D1D5DB',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
