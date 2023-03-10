import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import "./styles.scss";
import { Icons } from "../../icons";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontSize: 14,
  },
  section_title: {
    textAlign: "center",
  },
  section_content: {},
  title: { marginBottom: 40, color: "#6b72fd" },
  title_info: {
    color: "#6b72fd",
    flex: 1,
  },
  text_info: {
    flex: 1,
  },
  section_flex: {
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    margin: 10,
    padding: 20,
    paddingTop: 40,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "#6b72fd",
    height: 800,
  },
});

// Create Document Component
const MyDocument = (data) => {
  const input = data.data;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.section_title}>
            <Text style={styles.title}>
              {input?.name_project?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.section_content}>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Dueño del proyecto: </Text>
              <Text style={styles.text_info}>{input?.name_user}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Fecha de inicio: </Text>
              <Text style={styles.text_info}>{input?.created_format}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Marca: </Text>
              <Text style={styles.text_info}>{input?.brand_select}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Tipo de proyecto: </Text>
              <Text style={styles.text_info}>{input?.project_type}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Red social: </Text>
              <Text style={styles.text_info}>{input?.social_network}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Tipo De Publicación: </Text>
              <Text style={styles.text_info}>{input?.type_publication}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Paleta De Colores: </Text>
              <Text style={styles.text_info}>{input?.palete_colors}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Publico Objetivo: </Text>
              <Text style={styles.text_info}>{input?.public_goal}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Idea A Desarollar: </Text>
              <Text style={styles.text_info}>{input?.idea_post}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Formato De Entrega: </Text>
              <Text style={styles.text_info}>{input?.formato_entrega}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Tamaño: </Text>
              <Text style={styles.text_info}>{input?.tamaño}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Archivos Editables: </Text>
              <Text style={styles.text_info}>{input?.archivos_editables}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Costo Base Del Proyecto: </Text>
              <Text style={styles.text_info}>{input?.costo_base}</Text>
            </View>
            <View style={styles.section_flex}>
              <Text style={styles.title_info}>Costo Total: </Text>
              <Text style={styles.text_info}>{input?.costo_base}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

function InfoPDF({ modals, data, setModals }) {
  return (
    <div id="myModal" className="modal modal-pdf">
      <div className="modal-content">
        <div className="content">
          {Icons("download")}

          <PDFDownloadLink
            document={<MyDocument data={data} />}
            fileName={`${data.name_project.replaceAll(" ", "_")}.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Procesando..." : "Descargar PDF"
            }
          </PDFDownloadLink>
        </div>
        <div className="content-button">
          <div
            className="button"
            onClick={() => {
              setModals({
                ...modals,
                infoPDF: false,
              });
            }}
          >
            Cancelar
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPDF;
