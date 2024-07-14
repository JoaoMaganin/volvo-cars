import { Flex, Link, Spacer, Text } from "vcc-ui"
import { Car } from "../types/car.interface"
import Image from "next/image"
import styles from '../../public/css/components/carCard.module.css';

interface CardProps {
    car: Car
}

export default function CarCard({ car }: CardProps) {

    return (
        <div className={styles.cardWrapper}>
            <Text variant="bates" subStyle="emphasis">{car?.bodyType}</Text>
            <Flex extend={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                margin: 0
            }}>
                <Text variant="amundsen">{car?.modelName}</Text>
                <Text variant="bates" subStyle="inline-link">{car?.modelType}</Text>
            </Flex>

            <Spacer />
            <Image src={car.imageUrl} alt={`Car image ` + car.modelName} width="250" height="200" />
            <Spacer />

            <Flex extend={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                <Link href="https://volvocars.com/" arrow="right">
                    SHOP
                </Link>
                <Link href="https://volvocars.com/" arrow="right">
                    LEARN
                </Link>
            </Flex>
        </div>
    )
}