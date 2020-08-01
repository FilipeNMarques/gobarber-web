import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoImg} alt="Logo Go Barber" />
            <Profile>
              <img src={user.avatar_url} alt={user.name} />
              <div>
                <span>Bem vindo,</span>
                <strong>{user.name}</strong>
              </div>
            </Profile>
            <button type="button" onClick={signOut}>
              <FiPower />
            </button>
          </HeaderContent>
        </Header>
        <Content>
          <Schedule>
            <h1>Horários agendados</h1>
            <p>
              <span>Hoje</span>
              <span>Dia 05</span>
              <span>Segunda feira</span>
            </p>
            <NextAppointment>
              <strong>Atendimento a seguir</strong>
              <div>
                <img src={user.avatar_url} alt={user.name} />
                <strong>{user.name}</strong>

                <span>
                  <FiClock />
                  08:00
                </span>
              </div>
            </NextAppointment>
            <Section>
              <strong>Manhã</strong>
              <Appointment>
                <span>
                  <FiClock size={15} />
                  09:00
                </span>
                <div>
                  <img
                    src="https://spicess-images.s3.amazonaws.com/b572d1b1db5a6556f3a7-photo_2020-08-01_15-50-34.jpg"
                    alt="Foto de Lorena Silva"
                  />
                  <strong>Lorena Silva</strong>
                </div>
              </Appointment>
              <Appointment>
                <span>
                  <FiClock size={15} />
                  10:00
                </span>
                <div>
                  <img
                    src="https://spicess-images.s3.amazonaws.com/f8d0e0687eb1a8f69134-sousa.jpg"
                    alt="Foto de Andressa Souza"
                  />
                  <strong>Andressa Souza</strong>
                </div>
              </Appointment>
            </Section>
            <Section>
              <strong>Tarde</strong>
              <Appointment>
                <span>
                  <FiClock size={15} />
                  15:00
                </span>
                <div>
                  <img
                    src="https://spicess-images.s3.amazonaws.com/146c6e5e9d98c44cb247-berg.jpeg"
                    alt="Foto de Gutemberg Domingos"
                  />
                  <strong>Gutemberg Domingos</strong>
                </div>
              </Appointment>
            </Section>
          </Schedule>
          <Calendar />
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
