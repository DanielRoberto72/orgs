import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
// import {carregaProdutores} from '../../../servicos/carregaDados';
// import Topo from './Topo';

import useProdutores from '../../../hooks/useProdutores';

import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {

  const [titulo, lista] = useProdutores();

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };
  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 30,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
