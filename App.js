import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import Alumno from './Alumno';
import { SafeAreaView } from 'react-native';

export default function App() {

  const alumnos = [
    {
      nombre: 'CANDELARIA MORA SAMANTHA',
      matricula: '2114354',
      foto: 'https://media.gq.com.mx/photos/5f6ce732bc946e88f6c96320/16:9/w_2560%2Cc_limit/goky%2520ultra%2520instinto.jpg'
    },
    {
      nombre: 'CANTU SILVA JAVIER',
      matricula: '2111889',
      foto: 'https://i.pinimg.com/736x/1b/e5/0f/1be50ff9233aa069b27d53f98d6dc6b8.jpg'
    },
    {
      nombre: 'CARMONA LOZANO ANGEL EMILIANO',
      matricula: '2069119',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdExP4UYw1CtEKgpQ5fmdZk5qfjr11tshjBQ&s'
    },
    {
      nombre: 'CASTILLO ACOSTA JORGE',
      matricula: '2132842',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBD_zgwpdGa76iCoXE5BTtzKrOIe4Rp4offQ&s'
    },
    {
      nombre: 'DAVILA GONZALEZ ALDO ADRIAN',
      matricula: '1994122',
      foto: 'https://i.blogs.es/acc7e2/vegeta-ultraego-dragon-ball/375_375.webp'
    },
    {
      nombre: 'DURAN BARRIENTOS FABRIZIO',
      matricula: '2018230',
      foto: 'https://depor.com/resizer/v2/U3YQTE5KMZF7FJEL245X5Z3YVI.jpg?auth=72095110803b97faa4122c464d27d2ef87a9f123b98845a0fda31defb4aa01be&width=1600&height=1196&quality=90&smart=true'
    },
    {
      nombre: 'FLORES GONZALEZ SEBASTIAN',
      matricula: '2104564',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvfBPhCy9BEJH6iEJD-TaZd7JlHZ7bw7iHQ&s'
    },
    
    {
      nombre: 'FLORES LÓPEZ DIEGO',
      matricula: '2066033',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WiX4-RkatB58A0RpGOAbanyWwSaGuEd-9g&s'
    },
    {
      nombre: 'FLORES MARTINEZ ERICK ADRIAN',
      matricula: '2132976',
      foto: 'https://static.wikia.nocookie.net/espokemon/images/6/68/Zekrom.png/revision/latest?cb=20150621183442'
    },
    {
      nombre: 'GARZA AVALOS DIEGO',
      matricula: '2066114',
      foto: 'https://i.pinimg.com/originals/8b/b5/96/8bb59690dd31989407d8385295fbad41.png'
    },
    {
      nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL',
      matricula: '2031243',
      foto: 'https://static.wikia.nocookie.net/k-hip-hop/images/f/fc/Suga_1.png/revision/latest?cb=20230421115257'
    },
    {
      nombre: 'GRANJA PEÑA DIEGO',
      matricula: '2064733',
      foto: 'https://oshiprint.in/image/cache/catalog/poster/new/mqp1380-961x1100.jpeg.webp'
    },
    {
      nombre: 'IBARRA RODRIGUEZ ALEXIS',
      matricula: '2031243',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0YYGW_XcPkIRnijVyxinPtsBi4YTMnrnNA&s'
    },
    {
      nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN',
      matricula: '2064733',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrXXRjpJD82aopKWFHm5fnUVOdhsv3QnArw&s'
    },
    {
      nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA',
      matricula: '2094647',
      foto: 'https://static.wikia.nocookie.net/naruto/images/2/2e/Kakashi_Hatake_Parte_I_y_II_Anime.png/revision/latest?cb=20221120050147&path-prefix=es'
    },
    {
      nombre: 'MIRELES VELAZQUEZ ALEJANDRO',
      matricula: '2005102',
      foto: 'https://mercadoacasa.mx/cdn/shop/products/2502954-00-CH1200Wx1200H_1200x1200.jpg?v=1587759198'
    },
    {
      nombre: 'MONSIVAIS SALAZAR ANDRES',
      matricula: '2064574',
      foto: 'https://static.wikia.nocookie.net/esharrypotter/images/d/d0/Logo_Slytherin_2.png/revision/latest?cb=20160417160853'
    },
    {
      nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA',
      matricula: '2024783',
      foto: 'https://cdn.shopify.com/s/files/1/0469/3927/5428/files/Bildschirmfoto_2024-03-21_um_09.28.13_Kopie.png?v=1711009952'
    },
    {
      nombre: 'PEÑA MUNGARRO LUIS ANGEL',
      matricula: '2066077',
      foto:'https://cdn.shopify.com/s/files/1/0469/3927/5428/files/Screenshot_2024-08-19_at_17.39.49.png?v=1724082008'
    },
    {
      nombre: 'PUENTE REYNOSO JULIO CESAR',
      matricula: '2092151',
      foto: 'https://bangtannow.com/wp-content/uploads/2025/02/Jung-Hoseok-575x1024.jpg'
    },
    {
      nombre: 'RAMIREZ LOPEZ BRYAN',
      matricula: '2103708',
      foto: 'https://i.mydramalist.com/qrE1B_5c.jpg'
    },
    {
      nombre: 'RAMOS AVILA LILIANA VALERIA',
      matricula: '2115192',
      foto: 'https://wallpapers.com/images/hd/jimin-of-bts-wears-black-suit-xdp7eabj1xp24xft.jpg'
    },
    {
      nombre: 'RICO JAUREGUI MAURICIO',
      matricula: '2037503',
      foto: 'https://i.mydramalist.com/wdOeY_5f.jpg'
    },
    {
      nombre: 'RIVERA LUNA ADRIAN',
      matricula: '2131513',
      foto:'https://i.mydramalist.com/RBAb4z_5c.jpg'
    },
    {
      nombre: 'RIVERA REYNA JOSE EMILIO',
      matricula: '2013503',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpQs2FkC9zr4yP4Lgj70JXISJWwwIJEx8rw&s'
    },
    {
      nombre: 'RODRIGUEZ OLVERA ROSA ISELA',
      matricula: '2004613',
      foto: 'https://cdn.shopify.com/s/files/1/0469/3927/5428/files/ROSE_1.jpg?v=1732270807'
    },
    {
      nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL',
      matricula: '2133022',
      foto: 'https://alfabetajuega.com/hero/2021/05/Yuji-Itadori1.jpg?width=1200'
    },
    {
      nombre: 'SANCHEZ GALARZA JUAN CARLOS',
      matricula: '2026061',
      foto: 'https://static.wikia.nocookie.net/31minutos/images/1/1a/31minutos5.png/revision/latest?cb=20181015013740'
    },
    {
      nombre: 'SOLIS ORTIZ ALFREDO',
      matricula: '2095320',
      foto: 'https://www.rocketleague.com/rr7/rl_evergreen-BuFUX3Ml.jpg'
    },
    {
      nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL',
      matricula: '2025350',
      foto: 'https://static.wikia.nocookie.net/shingeki-no-kyojin/images/0/08/Irvin_Smith_Anime.png/revision/latest?cb=20180919023539&path-prefix=es'
    },
    {
      nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL',
      matricula: '2103895',
      foto:'https://cdn.tigresfans.com/wp-content/uploads/2024/12/14145124/NAHUEL_GUZMAN_Set-C_0117.webp'
    },
    {
      nombre: 'ZACATENCO OLIVE RODRIGO',
      matricula: '1857791',
      foto: 'https://www.nintendo.com/eu/media/images/08_content_images/news_5/2016_1/august_10/CI7_PokemonFeatureNews_Eevee_image912w.jpg'
    },
    {
      nombre: 'ZAVALA CANTU TERESA MARGARITA',
      matricula: '2025218',
      foto: 'https://scarletviolet.pokemon.com/_images/pokemon/sprigatito/pokemon-sprigatito.png'
    }

  ]
  //funcionalidad del Boton
  const [mensaje, setMensaje] = useState('');
  const saludo = () => {
    setMensaje(m => 'hola alumnos')
  };

  return (
   <SafeAreaView style={estilos.container}>
    <ScrollView contentContainerStyle={estilos.contenido}>
      {alumnos.map((alumno) => 
        (
          <Alumno key={alumno.matricula} nombre={alumno.nombre} matricula={alumno.matricula} foto={alumno.foto} ></Alumno>
        )
      )}
    </ScrollView>
    </SafeAreaView>
  )
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc2424',

  },
  contenido: {
    backgroundColor: '#494849'
  }
});