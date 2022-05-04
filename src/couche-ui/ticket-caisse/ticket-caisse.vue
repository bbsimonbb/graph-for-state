<script>
import listeOptionsChoisis from "./liste-options-choisis.vue"
import conditionsVue from "./conditions.vue"
import Option from '../option.vue'

export default {
 components:{
     'liste-options-choisis': listeOptionsChoisis,
     'conditions': conditionsVue,
  Option
 },
 inject:['bibState','bib']
}
</script>
<template>
    <div class="receipt">
        <div class="accordion-tiny">
            <div class="accordion-item summary">
                <button
                    value="True"
                    class="accordion-item-heading product-headingopened"
                    name="Quotation.SummaryModel.BtnToggleProduct"
                    type="submit"
                >
                    <div class="accordion-item-title">
                        <div>
                            <i class="minus-square"></i>
                        </div>
                        <div>
                            <strong>{{$t(bibState.produit.name)}}</strong>
                            <div>
                                <span>
                                    <strong>{{bibState.dimensions.y}}</strong> mm
                                </span>
                                <span>x</span>
                                <span>
                                    <strong>{{bibState.dimensions.x}}</strong> mm
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
                <liste-options-choisis></liste-options-choisis>
            </div>
            <div class="accordion-item base-pricing">
                <button
                    value="True"
                    class="accordion-item-heading base-pricing-heading opened"
                    name="Quotation.SummaryPricingModel.BtnToogleConditions"
                    type="submit"
                >
                    <div class="accordion-item-title">
                        <i class="minus-square"></i>Conditions
                    </div>
                    <span class="accordion-item-title-right">{{$eur(bibState.prixProduit.prixDeVente)}}</span>
                </button>
                <div class="accordion-item-content base-pricing-content">
                    <input
                        id="Quotation_SummaryPricingModel_TargetValueCalculation"
                        name="Quotation.SummaryPricingModel.TargetValueCalculation"
                        type="hidden"
                        value="False"
                    />
                    <input
                        id="Quotation_SummaryPricingModel_PurchaseNoImpactSale"
                        name="Quotation.SummaryPricingModel.PurchaseNoImpactSale"
                        type="hidden"
                        value="False"
                    />
                    <div class="section">
                        <div class="title">
                            <span>Achat</span>

                            <input
                                id="Quotation_SummaryPricingModel_HasForcedTerms"
                                name="Quotation.SummaryPricingModel.HasForcedTerms"
                                type="hidden"
                                value="True"
                            />
                            <input
                                id="Quotation_SummaryPricingModel_IsPurchasePriceForcable"
                                name="Quotation.SummaryPricingModel.IsPurchasePriceForcable"
                                type="hidden"
                                value="False"
                            />

                            <div class="purchaseworksite-key-value">
                                <div class="purchaseworksite-key">
                                    <span>Chantier</span>
                                </div>
                                <div class="purchaseworksite-value">
                                    <div class="dropdown dd-worksite">
                                        <button
                                            value="True"
                                            class="outside-screen"
                                            data-savescroll="true"
                                            id="BtnSelectPurchaseWorkSite"
                                            name="Quotation.SummaryPricingModel.BtnSelectPurchaseWorkSite"
                                            tabindex="-1"
                                            type="submit"
                                        ></button>

                                        <input
                                            id="selectedPurchaseWorkSiteId"
                                            name="Quotation.SummaryPricingModel.SelectedPurchaseWorkSiteId"
                                            type="hidden"
                                            value
                                        />
                                        <button class="dropdown-toggle">
                                            <div class="dropdown-text">
                                                <span>Par défaut</span>
                                            </div>
                                            <div class="addon">
                                                <i class="caret-down"></i>
                                            </div>
                                        </button>
                                        <ul class="dropdown-menu" data-addscrollposition="true">
                                            <li class data-value>
                                                <a class="no-loader">Par défaut</a>
                                            </li>
                                            <li class data-value="17">
                                                <a class="no-loader">Rénovation Ecole</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <button
                                value="True"
                                class="outside-screen"
                                id="BtnChangeDiscount0"
                                name="Quotation.SummaryPricingModel.PurchasePricings[0].BtnChangeDiscount"
                                tabindex="-1"
                                type="submit"
                            ></button>
                            <div class="title">
                                <span>{{$t(bibState.gamme.optionValues[bibState.gamme.selectedIndex].valueName)}}</span>
                            </div>
                            <div class="content">
                                <!-- Prix de base -->
                                <div class="key-value">
                                    <div class="key">
                                        <span>{{$t("prixTarif")}}</span>
                                    </div>
                                    <div class="complement"></div>
                                    <div class="value">
                                        <span>{{$eur(bibState.prixProduit.prixTarif)}}</span>
                                    </div>
                                </div>
                                <!-- Remise -->
                                <div class="key-value">
                                    <div class="key">
                                        <span>{{$t("remise")}}</span>
                                    </div>
                                    <div class="complement"></div>
                                    <div class="value">  
                                        <div class="value">
                                            <span>{{bibState.conditionsAchatVente.remise * 100}} %</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Prix d'achat Unitaire -->
                            <div class="key-value">
                                <div class="item">
                                    <span>{{$t("prixDAchat")}}</span>
                                </div>
                                <div class="complement"></div>
                                <div class="value">
                                    <span>{{$eur(bibState.prixProduit.prixDAchat)}}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="title">
                            <span>{{$t("vente")}}</span>
                        </div>

                        <div class="content">
                            <button
                                value="True"
                                class="outside-screen"
                                data-savescroll="True"
                                id="BtnChangePricing0"
                                name="Quotation.SummaryPricingModel.SalePricings[0].BtnChangePricing"
                                tabindex="-1"
                                type="submit"
                            ></button>
                            <div class="title">
                                <span>{{$t(bibState.gamme.optionValues[bibState.gamme.selectedIndex].valueName)}}</span>
                            </div>
                            <div class="content">
                                <div class="key-value">
                                    <div class="key">
                                        <span>{{$t("prixDAchat")}}</span>
                                    </div>
                                    <div class="complement"></div>
                                    <div class="value">
                                        <span>{{$eur(bibState.prixProduit.prixDAchat)}}</span>
                                    </div>
                                </div>

                                <!-- Coefficient -->
                                <div class="key-value">
                                    <div class="key">
                                        <span>{{$t("coefficient")}}</span>
                                    </div>
                                    <div class="complement"></div>

                                    <div class="value">
                                        <input
                                            class="saleCoefficient"
                                            maxlength="5"
                                            type="text"
                                            :value="bibState.conditionsAchatVente.coefficientVenteEnSaisie"
                                            @input="bib.nodes.conditionsAchatVente.setCoefficient"
                                        />
                                    </div>
                                </div>
                                <div class="key-value">
                                    <div class="item"></div>
                                </div>
                            </div>

                            <!-- Total Prix de vente -->
                            <div class="key-value">
                                <div class="key">
                                    <span>{{$t("prixDeVente")}}</span>
                                </div>
                                <div class="complement"></div>
                                <div class="value">
                                    <span>{{$eur(bibState.prixProduit.prixDeVente)}}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section customerSale">
                        <button
                            value="True"
                            class="outside-screen"
                            data-savescroll="True"
                            id="BtnChangeCustomerSaleUnitaryDiscount"
                            name="Quotation.SummaryPricingModel.CustomerSaleModel.BtnChangeCustomerSaleUnitaryDiscount"
                            tabindex="-1"
                            type="submit"
                        ></button>
                        <button
                            value="True"
                            class="outside-screen"
                            data-savescroll="True"
                            id="BtnChangeCustomerSalePercentageDiscount"
                            name="Quotation.SummaryPricingModel.CustomerSaleModel.BtnChangeCustomerSalePercentageDiscount"
                            tabindex="-1"
                            type="submit"
                        ></button>
                        <button
                            value="True"
                            class="outside-screen"
                            data-savescroll="True"
                            id="BtnChangeCustomerSalePrice"
                            name="Quotation.SummaryPricingModel.CustomerSaleModel.BtnChangeCustomerSalePrice"
                            tabindex="-1"
                            type="submit"
                        ></button>

                        <div class="title">
                            <span>{{$t("remiseClient")}}</span>
                        </div>
                        <div class="content">
                            <!-- Remise unitaire -->
                            <div class="key-value">
                                <div class="key">
                                    <span>{{$t("remiseUnitaire")}}</span>
                                </div>
                                <div class="value">
                                    <input
                                        class="saleMargin"
                                        id="Quotation_SummaryPricingModel_CustomerSaleModel_CustomerSaleUnitaryDiscountForcedValue"
                                        name="Quotation.SummaryPricingModel.CustomerSaleModel.CustomerSaleUnitaryDiscountForcedValue"
                                        placeholder="0"
                                        type="text"
                                        :value="bibState.prixRemise.remiseUnitaire"
                                        @input="bib.nodes.prixRemise.setRemiseUnitaire"
                                    />
                                    <span class="showPercent">€</span>
                                </div>
                            </div>
                            <!-- Pourcentage de remise -->
                            <div class="key-value">
                                <div class="key">
                                    <span>{{$t("remisePct")}}</span>
                                </div>
                                <div class="value">
                                    <input
                                        class="saleMargin"
                                        id="Quotation_SummaryPricingModel_CustomerSaleModel_CustomerSalePercentageDiscountForcedValue"
                                        placeholder="0"
                                        type="text"
                                        :value="bibState.prixRemise.remisePct * 100"
                                        @input="bib.nodes.prixRemise.setRemisePct"
                                    />
                                    <span class="showPercent">%</span>
                                </div>
                            </div>
                            <!-- Prix de vente client -->
                            <div class="key-value">
                                <div class="item">
                                    <span>{{$t("prixDeVenteClient")}}</span>
                                </div>
                                <div class="value">
                                    <input
                                        class="saleMargin"
                                        id="Quotation_SummaryPricingModel_CustomerSaleModel_CustomerSalePriceForcedValue"
                                        name="Quotation.SummaryPricingModel.CustomerSaleModel.CustomerSalePriceForcedValue"
                                        :placeholder="bibState.prixRemise.prixDeVenteClient"
                                        type="text"
                                        value
                                    />
                                    <span class="showPercent">€</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="title">
                            <span>{{$t("margeVendeur")}}</span>
                        </div>
                        <div class="content">
                            <!-- Marge unitaire -->
                            <div class="key-value">
                                <div class="key">
                                    <span>{{$t("unitaire")}}</span>
                                </div>
                                <div class="value">
                                    <span>{{$eur(bibState.margeVendeur.margeUnitaire)}}</span>
                                </div>
                            </div>

                            <!-- Globale -->
                            <div class="key-value">
                                <div class="key">
                                    <span>{{$t("globale")}}</span>
                                </div>
                                <div class="value">
                                   <span>{{$eur(bibState.margeVendeur.margeGlobale)}}</span>
                                </div>
                            </div>

                            <!-- Taux -->
                            <div class="key-value">
                                <div class="item">
                                    <span>{{$t("taux")}}</span>
                                </div>
                                <div class="value">
                                    <span>{{(bibState.margeVendeur.tauxDeMarge * 100).toFixed()}} %</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="separator"></div>
        <div class="key-value">
            <div class="key">
                <span>{{$t("quantité")}}</span>
            </div>
            <div class="value">
                <span>{{bibState.dimensions.quantite}}</span>
            </div>
        </div>
        <div class="key-value">
            <div class="key">
                <span>{{$t("totalHT")}}</span>
            </div>
            <div class="value">
                <span>{{$eur(bibState.tvaTotalTtc.totalHt)}}</span>
            </div>
        </div>
        <div class="key-value">
            <div class="key">
                <span>{{$t("tauxTvaPct")}}</span>
            </div>
            <div class="value vatSelectedRateWrapper">
                <div class="dropdown vatSelectedRate">
                    <select style="height:20px" @change="bib.nodes.tvaTotalTtc.setTauxTva">
                        <option value=".2">20 %</option>
                        <option value=".1">10 %</option>
                        <option value=".055">5,5 %</option> 
                    </select>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <div class="key-value total">
            <div class="key">
                <span>{{$t("totalTtc")}}</span>
            </div>
            <div class="value">
                <span>{{$eur(bibState.tvaTotalTtc.totalTtc)}}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

select {
  appearance: none;
  background-color: white;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  
}
</style>