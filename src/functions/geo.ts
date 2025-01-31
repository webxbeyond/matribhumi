import { districts, divisions, unions, upazillas } from "../data";
import { District, Division, Union, Upazilla } from "../types";

// --------------------------------

// Function to get division by name
export function getDivision(name: string): Division {
  if (!name || name.trim() === "") {
    throw new Error("Division name is required");
  }

  const division = divisions.find(
    (division) =>
      division.name.toLowerCase() === name.toLowerCase() ||
      division.bn_name === name
  );

  if (!division) {
    throw new Error(`Division not found for name: ${name}`);
  }

  return division;
}

// Function to get district by name
export function getDistrict(name: string): District {
  if (!name || name.trim() === "") {
    throw new Error("District name is required");
  }

  const district = districts.find(
    (district) =>
      district.name.toLowerCase() === name.toLowerCase() ||
      district.bn_name === name
  );

  if (!district) {
    throw new Error(`District not found for name: ${name}`);
  }

  return district;
}

// Function to get upazilla by name
export function getUpazilla(name: string): Upazilla {
  if (!name || name.trim() === "") {
    throw new Error("Upazilla name is required");
  }

  const upazilla = upazillas.find(
    (upazilla) =>
      upazilla.name.toLowerCase() === name.toLowerCase() ||
      upazilla.bn_name === name
  );

  if (!upazilla) {
    throw new Error(`Upazilla not found for name: ${name}`);
  }

  return upazilla;
}

// Function to get union by name
export function getUnion(name: string): Union {
  if (!name || name.trim() === "") {
    throw new Error("Union name is required");
  }

  const unionData = unions.find(
    (union) =>
      union.name.toLowerCase() === name.toLowerCase() ||
      union.bn_name === name
  );

  if (!unionData) {
    throw new Error(`Union not found for name: ${name}`);
  }

  return unionData;
}

// ----------------------------------------------------------
// Function to get districts by division name
export function getDistrictsOfDivision(name: string): District[] {
  const division = getDivision(name);
  return division
    ? districts.filter((district) => district.division_id === division.id)
    : [];
}

// Function to get upazillas by district name
export function getUpazillasOfDistrict(name: string): Upazilla[] {
  const district = districts.find(
    (district) => district.name.toLowerCase() === name.toLowerCase()
  );
  return district
    ? upazillas.filter((upazilla) => upazilla.district_id === district.id)
    : [];
}

// Function to get unions by upazilla name
export function getUnionsOfUpazilla(name: string): Union[] {
  const upazilla = upazillas.find(
    (upazilla) => upazilla.name.toLowerCase() === name.toLowerCase()
  );
  return upazilla
    ? unions.filter((union) => union.upazilla_id === upazilla.id)
    : [];
}