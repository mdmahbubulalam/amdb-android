/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, Text, View } from 'react-native';
import styles from './styles';

const Details = (props) => {
    const imdbID = props.route.params.imdbID;
    const [details, setDetails] = useState([])
    const {Poster,Title,imdbRating,imdbVotes,Year,Rated,Genre,Runtime,Plot,Director,Writer,Actors,Awards,BoxOffice,Country} = details
    

    useEffect(()=>{
        const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=ebe8d948`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
      },[imdbID])
    // const win = Dimensions.get('window');
    // const ratio = win.width/300;
    // let devcieHeight =  win.width;
    // let devcieWidth = 450 * ratio;
      
    

    return (
        
        <View style={styles.container}>
            <ScrollView>
                {
                    Poster ?
                    <View style={{display:'flex',flexWrap:'wrap',backgroundColor:'#000000', borderRadius:5}}>
                        <Image
                            source={{uri:Poster}}
                            style ={
                                { 
                                    width: 357,
                                    height: 500,
                                    margin:8
                                } 
                            }
                        />
                        <View style={{margin:8,width: 357}}>
                            <Text style={{fontSize: 22,color:'#00e1ff', marginBottom:10}}>{Title} ({Year})</Text>
                            <Text style={{ fontSize: 15,color:'#ffffff',textAlign: 'justify',marginBottom:7}}><Text style={{borderWidth:3, backgroundColor:'gray'}}> {Rated} </Text> {Genre}. {Runtime}</Text>
                            <Text style={{ fontSize: 15,color:'#ffffff',textAlign: 'justify',marginBottom:2}}><Text style={{color:'#F5C518'}}>IMDb RATING </Text> : {imdbRating}/10</Text>
                            <Text style={{ fontSize: 15,color:'#ffffff',textAlign: 'justify',marginBottom:7}}><Text style={{color:'#F5C518'}}>IMDb VOTE </Text> : {imdbVotes} </Text>
                            <Text style={{ fontSize: 15,color:'#ffffff',textAlign: 'justify',marginBottom:5, marginTop:5}}>{Plot}</Text>
                            <Text style={styles.text}><Text style={{color:'#00e1ff'}}>Director</Text> : {Director}</Text>
                            <Text style={styles.text}><Text style={{color:'#00e1ff'}}>Writer</Text> : {Writer}</Text>
                            <Text style={styles.text}><Text style={{color:'#00e1ff'}}>Stars</Text> : {Actors}</Text>
                            <Text style={styles.text}><Text style={{color:'#00e1ff'}}>Awards</Text> : {Awards}</Text>
                            <Text style={styles.text}><Text style={{color:'#00e1ff'}}>BoxOffice</Text> : {BoxOffice}</Text>
                            <Text style={styles.text}><Text style={{color:'#00e1ff'}}>Country</Text> : {Country}</Text>
                            
                        </View>
                    </View>
                    :

                    <View style={{flex: 1,justifyContent: "center"}}>
                        <ActivityIndicator size="large" color="#00e1ff" />
                    </View>


                }
           
            </ScrollView>
        </View>

        
    );
};

export default Details;