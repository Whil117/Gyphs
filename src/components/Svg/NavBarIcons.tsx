import { FC } from "react";
import { IProps } from "./types";

interface ISymbol {
  color: string;
  size?: {
    width?: string;
    height?: string;
  };
}

const Symbol: FC<ISymbol> = ({ color, size }) => {
  return (
    <svg
      width={size?.width ? size?.width : "26px"}
      height={size?.height ? size?.height : "26px"}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M2.04224 16.3425L20.427 34.7273L34.7273 20.427L22.981 8.68069V12.7682L30.6413 20.4286L20.4285 30.6413L6.12979 16.3425L9.70409 12.7682L9.70256 8.68222L2.04224 16.3425ZM10.2143 8.17051L16.3425 14.2988L22.4708 8.17051L20.4285 6.12827L18.3848 8.17204L16.3425 6.1298L14.3003 8.17204L12.2565 6.12827"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="26px"
            height="26px"
            fill="white"
            transform="translate(0 18.3848) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HomeIcon: FC<IProps> = (props) => {
  return (
    <svg
      width={props.size ? props.size : "30px"}
      height={props.size ? props.size : "30px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={props.theme === "light" ? props.color : "white"}
        d="M5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V11C21.0008 10.8684 20.9755 10.7379 20.9258 10.6161C20.876 10.4943 20.8027 10.3834 20.71 10.29L12.71 2.29C12.5226 2.10375 12.2692 1.99921 12.005 1.99921C11.7408 1.99921 11.4874 2.10375 11.3 2.29L3.3 10.29C3.20551 10.3826 3.13034 10.4931 3.07885 10.6149C3.02735 10.7368 3.00055 10.8677 3 11V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22ZM10 20V15H14V20H10ZM5 11.41L12 4.41L19 11.41V20H16V15C16 14.4696 15.7893 13.9609 15.4142 13.5858C15.0391 13.2107 14.5304 13 14 13H10C9.46957 13 8.96086 13.2107 8.58579 13.5858C8.21071 13.9609 8 14.4696 8 15V20H5V11.41Z"
      />
    </svg>
  );
};

export const SearchIcon: FC<IProps> = (props) => {
  return (
    <svg
      width={props.size ? props.size : "30px"}
      height={props.size ? props.size : "30px"}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.747 4.389C13.6827 5.32581 14.2683 6.55551 14.4059 7.87239C14.5436 9.18928 14.2248 10.5135 13.503 11.6235C13.629 11.7285 13.734 11.844 13.881 11.949C14.091 12.117 14.3745 12.327 14.7315 12.5685C15.0885 12.8205 15.3195 12.978 15.4245 13.062C15.8655 13.3875 16.191 13.6605 16.4115 13.881C16.7475 14.217 17.0415 14.5635 17.2935 14.931C17.556 15.2985 17.7555 15.6555 17.913 16.023C18.06 16.3905 18.1335 16.737 18.102 17.073C18.081 17.409 17.955 17.6925 17.724 17.9235C17.493 18.1545 17.2095 18.2805 16.8735 18.3015C16.548 18.3225 16.191 18.2595 15.834 18.102C15.4665 17.955 15.099 17.745 14.742 17.4825C14.3745 17.2305 14.028 16.9365 13.692 16.6005C13.4715 16.38 13.1985 16.0545 12.8835 15.624C12.7785 15.4875 12.621 15.2565 12.39 14.931C12.159 14.595 11.97 14.3325 11.802 14.112C11.634 13.902 11.4975 13.7445 11.34 13.587C10.2502 14.1577 9.00662 14.3656 7.7904 14.1805C6.57418 13.9954 5.44878 13.427 4.57801 12.558C2.33101 10.3005 2.33101 6.636 4.57801 4.389C5.11416 3.8522 5.75087 3.42635 6.45172 3.13581C7.15257 2.84526 7.90382 2.69571 8.66251 2.69571C9.4212 2.69571 10.1725 2.84526 10.8733 3.13581C11.5742 3.42635 12.2109 3.8522 12.747 4.389ZM11.2665 11.067C11.9525 10.376 12.3374 9.44188 12.3374 8.46825C12.3374 7.49461 11.9525 6.56047 11.2665 5.8695C10.9256 5.52758 10.5206 5.25629 10.0746 5.07119C9.62868 4.88608 9.1506 4.7908 8.66776 4.7908C8.18493 4.7908 7.70684 4.88608 7.2609 5.07119C6.81495 5.25629 6.40992 5.52758 6.06901 5.8695C5.72709 6.21041 5.4558 6.61544 5.2707 7.06138C5.0856 7.50733 4.99032 7.98541 4.99032 8.46825C4.99032 8.95108 5.0856 9.42917 5.2707 9.87511C5.4558 10.3211 5.72709 10.7261 6.06901 11.067C6.40992 11.4089 6.81495 11.6802 7.2609 11.8653C7.70684 12.0504 8.18493 12.1457 8.66776 12.1457C9.1506 12.1457 9.62868 12.0504 10.0746 11.8653C10.5206 11.6802 10.9256 11.4089 11.2665 11.067Z"
        fill={props.theme === "light" ? props.color : "white"}
      />
    </svg>
  );
};

export const SettingsIcon: FC<IProps> = (props) => {
  return (
    <svg
      width={props.size ? props.size : "30px"}
      height={props.size ? props.size : "30px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 1.5V4.5L8.25 5.25L6 3L3 6L5.25 8.25L4.5 9.75H1.5V14.25H4.5L5.25 15.75L3 18L6 21L8.25 18.75L9.75 19.5V22.5H14.25V19.5L15.75 18.75L18 21L21 18L18.75 15.75L19.5 14.25H22.5V9.75H19.5L18.75 8.25L21 6L18 3L15.75 5.25L14.25 4.5V1.5H9.75Z"
        stroke={props.theme === "light" ? props.color : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={props.theme === "light" ? props.color : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Symbol;

// export default HomeIcon
