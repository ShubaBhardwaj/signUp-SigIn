import { StyleSheet } from "react-native";

const signInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 70,
    height: 70,
    backgroundColor: "#9ACD32",
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 25,
  },

  formContainer: {
    width: "100%",
    maxWidth: 380,
    display: "flex",
  },

  subtitle: {
    fontSize: 18,
    color: "#8A8A8A",
    textAlign: "center",
    marginBottom: 45,
    lineHeight: 28,
  },

  label: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2D2D2D",
    marginBottom: 12,
    marginLeft: 5,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 22,
    fontSize: 18,
    color: "#2D2D2D",
    marginBottom: 28,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 4,
  },

  inputFocused: {
    borderWidth: 3,
    borderColor: "#9ACD32",
    borderRadius: 20,

    shadowColor: "#9ACD32",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 8,
  },

  button: {
    backgroundColor: "#9ACD32",
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,

    shadowColor: "#9ACD32",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginTop: 35,
    marginBottom: 35,
  },

  socialButton: {
    width: 78,
    height: 78,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1.5,
    borderColor: "#E7E7E7",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,

    elevation: 3,
  },

  accountText: {
    textAlign: "center",
    fontSize: 18,
    color: "#2D2D2D",
    marginBottom: 18,
  },

  greenText: {
    color: "#9ACD32",
    fontWeight: "700",
  },

  forgotText: {
    textAlign: "center",
    fontSize: 18,
    color: "#9ACD32",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});

export default signInStyles;
