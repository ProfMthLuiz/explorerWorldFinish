import CountryFlag from "react-native-country-flag";
import stylesPaises from "../styles/StylePaises";

const Bandeira = ({pais}) => {
    return(
        <CountryFlag isoCode={pais} size={55} style={stylesPaises.bandeira}/>
    )
}

export default Bandeira;