import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

import dashboardStyle from './styles.js';
import { ACTIVITY } from '../../datas/activity.js';
import ActivityItem from '../../components/activityiItem/index.js';
import { SYMPTOME } from '../../datas/symptom.js';
import SymptomeItem from '../../components/symptomeItem/index.js';
import { DOCTOR } from '../../datas/doctors.js';

const Home = () => {
  return (
    <ScrollView>
      {/* debut du header */}
      <View style={dashboardStyle.header}>
        <Text style={dashboardStyle.userName}>Adams Dev</Text>
        <Image source={require('../../assets/images/p1.jpg')} style={dashboardStyle.userImage} />
      </View>
      {/* fin du header */}

      {/* Liste des activités */}

      <FlatList
        data={ACTIVITY}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyle.flatStyle}
        renderItem={({ item }) => {
          return (
            <ActivityItem item={item} />
          );

        }}
      />

      {/* fin liste des activitées */}

      {/* Liste des Syptome */}
      <View style={dashboardStyle.title} >
        <Text style={dashboardStyle.titleBold} >Quel symptome avez-vous?</Text>
      </View>
      <FlatList
        data={SYMPTOME}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyle.flatStyle}
        renderItem={({ item }) => {
          return (
            <SymptomeItem item={item} />
          );

        }}
      />
      {/* Fin */}

      {/* Les docteurs */}
      <View style={dashboardStyle.title_space_between} >
        <Text style={dashboardStyle.titleBold} >Nos Docteurs</Text>
        <TouchableOpacity>
          <Text style={dashboardStyle.link} >Afficher tout</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={dashboardStyle.doctorContainer}>
          {
            DOCTOR.splice(0,3).map((doctor, index) => {
              return (
                <TouchableOpacity key={index} style={dashboardStyle.doctorCard}>
                  <Image source={{ uri: `${doctor.image}` }} style={dashboardStyle.doctorImg} />
                  <View style={dashboardStyle.doctorInfo}>
                    <Text style={dashboardStyle.doctorName}>{doctor.name}</Text>
                    <Text style={dashboardStyle.doctorSpec}>{doctor.specialite}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
