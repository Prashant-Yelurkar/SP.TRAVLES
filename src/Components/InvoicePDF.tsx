// import React from "react";
// import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//     fontFamily: "Helvetica",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   address: {
//     marginBottom: 20,
//     fontSize: 10,
//   },
//   inputArea: {
//     marginBottom: 10,
//   },
//   flexRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   flexColumn: {
//     flexDirection: "column",
//   },
//   flexItem: {
//     width: "48%",
//   },
//   input: {
//     padding: 5,
//     borderWidth: 1,
//     borderColor: "#000",
//     borderRadius: 3,
//     width: "100%",
//     marginTop: 5,
//   },
//   table: {
//     display: "table",
//     width: "100%",
//     marginVertical: 20,
//     borderWidth: 1,
//     borderColor: "#000",
//     borderStyle: "solid",
//     borderCollapse: "collapse",
//   },
//   tableRow: {
//     flexDirection: "row",
//   },
//   tableColHeader: {
//     width: "25%",
//     backgroundColor: "#f2f2f2",
//     borderRightWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: "#000",
//     textAlign: "center",
//     padding: 5,
//   },
//   tableCol: {
//     width: "25%",
//     borderRightWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: "#000",
//     padding: 5,
//     textAlign: "center",
//   },
//   tableColSpan2: {
//     width: "50%",
//     borderRightWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: "#000",
//     padding: 5,
//     textAlign: "center",
//   },
//   tableColSpan4: {
//     width: "100%",
//     borderRightWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: "#000",
//     padding: 5,
//     textAlign: "center",
//   },
//   footer: {
//     textAlign: "center",
//     marginTop: 20,
//     fontWeight: "bold",
//   },
//   ul: {
//     paddingLeft: 15,
//     margin: 0,
//   },
// });

// const InvoicePDF = () => (
//   <Document>
//     <Page style={styles.page}>
//       <View style={styles.header}>
//         <Text style={styles.title}>SP. TRAVELS</Text>
//         <Text style={styles.address}>
//           13/B/505 Gurukrupa Socity Sangharsh nagr Chandivali Famr Road ,
//           Andheri (e) Mumbai-72
//         </Text>
//       </View>
//       <View style={styles.flexRow}>
//         <View style={styles.flexItem}>
//           <Text>INVOICE NO.</Text>
//           <Text style={styles.input}>500</Text>
//         </View>
//         <View style={styles.flexItem}>
//           <Text>DATE</Text>
//           <Text style={styles.input}>12/09/2025</Text>
//         </View>
//       </View>
//       <View style={styles.inputArea}>
//         <Text>M/s.</Text>
//         <Text style={styles.input}>EURO CAB SERVICES PVT. LTD</Text>
//       </View>
//       <View style={styles.flexRow}>
//         <View style={styles.flexItem}>
//           <Text>CAR USED BY</Text>
//           <Text style={styles.input}>Mr. Prashant Yelurkar</Text>
//         </View>
//         <View style={styles.flexItem}>
//           <Text>BOOKED BY</Text>
//           <Text style={styles.input}>Mr. Rahul sir</Text>
//         </View>
//       </View>
//       <View style={styles.flexRow}>
//         <View style={styles.flexItem}>
//           <Text>VEHICLE TYPE</Text>
//           <Text style={styles.input}>Toyota(etious)</Text>
//         </View>
//         <View style={styles.flexItem}>
//           <Text>HIRED ON/FROM</Text>
//           <Text style={styles.input}>08/06/2024</Text>
//         </View>
//       </View>

//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColHeader}>PARTICULARS</Text>
//           <Text style={styles.tableColHeader}>DURATION</Text>
//           <Text style={styles.tableColHeader}>RATE Rs</Text>
//           <Text style={styles.tableColHeader}>AMOUNT Rs</Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>FOR 8 HRS / 80 KMS</Text>
//           <Text style={styles.tableCol}>DAYS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>EXTRA KMS</Text>
//           <Text style={styles.tableCol}>KMS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>EXTRA HRS</Text>
//           <Text style={styles.tableCol}>HRS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>SHORT / AIRPORT</Text>
//           <Text style={styles.tableCol}>DAYS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>OUTSTATION</Text>
//           <Text style={styles.tableCol}>DAYS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>TOTAL KMS</Text>
//           <Text style={styles.tableCol}>KMS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>DRIVER OUTSTATION D.A</Text>
//           <Text style={styles.tableCol}>DAYS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableCol}>CANCELLATION CHARGES</Text>
//           <Text style={styles.tableCol}>DAYS</Text>
//           <Text style={styles.tableCol}></Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColSpan4}>EXTRA :-</Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColSpan2}>RUPEES :-</Text>
//           <Text style={styles.tableCol}>AMOUNT Rs</Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColSpan2}></Text>
//           <Text style={styles.tableCol}>TOLL / PARK</Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColSpan2}>DUTY SLIP NUMBER :-</Text>
//           <Text style={styles.tableCol}>TOTAL Rs</Text>
//           <Text style={styles.tableCol}></Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColSpan2}>JOB ID :-</Text>
//           <Text style={styles.tableColSpan2} rowSpan={3}>
//             STAMP AND SIGNATURE
//           </Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColSpan2}>
//             PAN CARD NUMBER :- ACVPY4152A
//           </Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text style={styles.tableColSpan2}>CONTACT NUMBERS:</Text>
//           <Text style={styles.ul}>
//             <Text>9870456426</Text>
//             <Text>7021999038</Text>
//           </Text>
//         </View>
//       </View>

//       <Text style={styles.footer}>Thank you for your business!</Text>
//     </Page>
//   </Document>
// );

// export default InvoicePDF;
