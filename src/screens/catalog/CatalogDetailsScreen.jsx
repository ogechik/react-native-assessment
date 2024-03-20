import {StyleSheet, View, Text} from "react-native";
import {useEffect, useState} from "react";
import Record from "../../components/Record";

const CatalogDetailsScreen = ({route}) => {
    const [pokemonDetails, setPokemonDetails] = useState('');

    useEffect(()=> {
        const getPokemonDetails = async () => {
            let pokemon = await fetch(route.params.url)

            const data = await pokemon.json()

            setPokemonDetails(data);
        }

        getPokemonDetails()
    }, []);

    return <View style={styles}>
        <Record field="Name" value={pokemonDetails.name}/>
        <Record field="Base XP" value={pokemonDetails.base_experience} />
        <Record field="Height(Decimeters)" value={pokemonDetails.height} />
        <Record field="Weight(Hectograms)" value={pokemonDetails.weight} />
        <Record field="Order" value={pokemonDetails.order} />
        <Record field="Is Default" value={pokemonDetails.is_default ? 'true': 'false'} />
    </View>
}

const styles = StyleSheet.create({
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'white',
    margin: 8,
    paddingTop: 32
})

export default CatalogDetailsScreen
