import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import React, { lazy, Suspense } from "react";
import { Button, Container } from "semantic-ui-react";
import GlobalStyle from "./GlobalStyles";
import "./App.css";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

function App() {
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <Suspense>
      <GlobalStyle />
      <Container>
        <header className="py-3">
          <div>
            <span className="brand__name">MetaCatz</span>
            <div style={{ float: "right" }}>
              <w3m-button />
            </div>
          </div>
        </header>

        <section className="py-5 mt-5">
          <div className="text-center">
            <h2>MCATZ Token Staking Pool</h2>
            <p>Rewarding stakers 1.2% monthly returns</p>
          </div>

          <div className="text__brac">
            <p>A Total of 0 MCATZ is staked</p>
          </div>
        </section>

        <section className="">
          <div className="text-center text__brac">
            {isConnected ? (
              <>
                <div style={{ textAlign: "center", margin: "auto" }}>
                  <h3>Why are you not currently staked?</h3>

                  <div className="mt-5">
                    <table class="table text-start ">
                      <tbody>
                        <tr>
                          <td>
                            <b>Staked</b>
                          </td>
                          <td>
                            {" "}
                            <span style={{ color: "grey" }}> 0</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {" "}
                            <b>Unstaked</b>
                          </td>
                          <td>
                            {" "}
                            <span style={{ color: "grey" }}> 0</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5">
                    <form>
                      <input type="number" placeholder="Amount" />
                      <Button primary>Stake MCATZ</Button>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", margin: "auto" }}>
                <div>
                  <p>
                    You are not currently staked in the MCATZ staking pool.
                    Staking your MCATZ tokens will earn you 1.2% monthly
                    returns.
                  </p>
                  <p>
                    To stake your MCATZ tokens, click the button below and
                    connect your wallet.
                  </p>
                </div>
                <w3m-button />
              </div>
            )}
          </div>
        </section>

        <p className="text-center mt-5">
          This stake pool is provided by MetaCatz Team. For more information
          visit our social profiles:
        </p>

        <div className="py-5" style={{ margin: "auto", textAlign: "center" }}>
          <i class="fa-brands fa-twitter"></i>

          <i class="fa-brands fa-telegram"></i>
        </div>
      </Container>
    </Suspense>
  );
}

export default App;
