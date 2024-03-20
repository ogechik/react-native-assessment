import {View, Text, StyleSheet, Button, ScrollView} from "react-native";
import CatalogueCard from "../../components/CatalogueCard";
import {useEffect, useState} from "react";

const CatalogsScreen = ({navigation}) => {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10');
    const [prevUrl, setPrevUrl] = useState('');

    useEffect(()=> {
        const getPokemons = async () => {
            let poks = await fetch(nextUrl)

            const data = await poks.json()

            setPokemons(data.results)
            setNextUrl(data.next);
            setPrevUrl(data.previous);
        }

        getPokemons()
    }, []);

    const nextPokemons = async (url) => {
        let poks = await fetch(url)

        const data = await poks.json()

        setPokemons(data.results)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
    }

    const prevPokemons = async (url) => {
        let poks = await fetch(url)

        const data = await poks.json()

        setPokemons(data.results)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
    }

    return <View style={styles.container}>
        <View style={styles.row}>
            <Button
                title="Prev"
                onPress={() => prevPokemons(prevUrl)} />
            <Button
                title="Next"
                onPress={() => nextPokemons(nextUrl)} />
        </View>
        <ScrollView>
            {pokemons.map((pk, index)=><CatalogueCard key={`${pk.name}-${index}`} navigation={navigation} pokemon={pk} />)}
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default CatalogsScreen
