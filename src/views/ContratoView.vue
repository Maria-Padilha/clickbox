<template>
  <div class="mx-4 lg:mx-10 my-8 grid gap-6 lg:grid-cols-[2fr_3fr] items-start">
    <!-- COLUNA ESQUERDA — FORM -->
    <div>
      <v-form>
        <!-- CONTRATANTE -->
        <v-card class="mb-6" variant="tonal">
          <v-card-title class="text-subtitle-1 font-weight-bold">CONTRATANTE</v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="Nome" v-model="form.nome"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="CPF" v-model="form.cpf"/>
              </v-col>

              <v-col cols="12" md="8">
                <v-text-field v-bind="fProps" label="Endereço" v-model="form.endereco"/>
              </v-col>
              <v-col cols="6" md="2">
                <v-text-field v-bind="fProps" label="Nº" v-model="form.num"/>
              </v-col>
              <v-col cols="6" md="2">
                <v-text-field v-bind="fProps" label="Comp." v-model="form.comp"/>
              </v-col>

              <v-col cols="6" md="3">
                <v-text-field v-bind="fProps" label="CEP" v-model="form.cep"/>
              </v-col>
              <v-col cols="6" md="3">
                <v-text-field v-bind="fProps" label="Bairro" v-model="form.bairro"/>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field v-bind="fProps" label="Cidade" v-model="form.cidade"/>
              </v-col>
              <v-col cols="6" md="2">
                <v-text-field v-bind="fProps" label="UF" v-model="form.uf" maxlength="2"/>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="Telefone" v-model="form.telefone"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="E-mail" v-model="form.email"/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- QUADRO RESUMO / EVENTO -->
        <v-card class="mb-6" variant="tonal">
          <v-card-title class="text-subtitle-1 font-weight-bold">QUADRO RESUMO / EVENTO</v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="Equipamento" v-model="form.equipamento"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="Tipo de Evento" v-model="form.evento"/>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field v-bind="fProps" type="date" label="Data do Evento" v-model="form.data_evento"/>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field v-bind="fProps" type="time" label="Horário de Início" v-model="form.inicio_evento"/>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field v-bind="fProps" type="time" label="Horário de Término" v-model="form.termino_evento"/>
              </v-col>

              <v-col cols="12" md="3">
                <v-text-field v-bind="fProps" label="Carga horária (h)" v-model="form.qtd_horas_evento"/>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field v-bind="fProps" label="Local" v-model="form.local_evento"/>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-bind="fProps" label="Cidade do Evento" v-model="form.cidade_evento"/>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="Serviço" v-model="form.servico_evento"/>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field v-bind="fProps" label="Valor (R$)" v-model="form.valor_evento"/>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field v-bind="fProps" label="Desconto (R$)" v-model="form.desconto_evento"/>
              </v-col>

              <v-col cols="12">
                <v-text-field v-bind="fProps" label="Brinde" v-model="form.brinde_evento"/>
              </v-col>
            </v-row>

            <!-- Autorização de publicação -->
            <div class="mt-2">
              <div class="text-body-2 mb-1">Autorização de publicação nas redes sociais</div>
              <v-radio-group v-model="form.autorizacao_publicacao" inline>
                <v-radio label="SIM" value="sim"></v-radio>
                <v-radio label="NÃO" value="nao"></v-radio>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>

        <!-- MONTAGEM / DESMONTAGEM -->
        <v-card class="mb-6" variant="tonal">
          <v-card-title class="text-subtitle-1 font-weight-bold">MONTAGEM E DESMONTAGEM</v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" type="date" label="Data da Montagem" v-model="form.data_montagem"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" type="time" label="Horário de Início (montagem)" v-model="form.inicio_montagem"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" type="date" label="Data da Desmontagem" v-model="form.data_desmontagem"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" type="time" label="Horário de Início (desmontagem)" v-model="form.inicio_desmontagem"/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- ASSINATURA / RODAPÉ -->
        <v-card class="mb-6" variant="tonal">
          <v-card-title class="text-subtitle-1 font-weight-bold">ASSINATURA</v-card-title>
          <v-card-text>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" label="Cidade (para assinatura)" v-model="form.cidade"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-bind="fProps" type="date" label="Data do Contrato" v-model="form.data_contrato"/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <div class="flex flex-wrap gap-3 mb-6">
          <v-btn color="primary" :loading="loading" @click="gerarContrato">Baixar .docx</v-btn>
          <v-btn color="secondary" :loading="loading" @click="gerarPreview">Pré-visualizar</v-btn>
          <v-btn variant="text" @click="carregarModelo">Recarregar modelo</v-btn>
        </div>
      </v-form>
    </div>

    <!-- COLUNA DIREITA — PRÉVIA PAGINADA -->
    <div>
      <v-card variant="outlined" class="mb-3" v-if="hasPreview">
        <v-card-text class="d-flex align-center ga-4 flex-wrap">
          <v-btn size="small" @click="goPrev" :disabled="currentPage<=1">Anterior</v-btn>
          <v-btn size="small" @click="goNext" :disabled="currentPage>=totalPages">Próxima</v-btn>
          <div class="text-body-2">Página <b>{{ currentPage }}</b> de <b>{{ totalPages }}</b></div>
          <v-spacer/>
          <div class="d-flex align-center ga-2">
            <span class="text-caption">Zoom</span>
            <v-slider v-model="zoom" :min="0.7" :max="1.6" :step="0.1" style="width:220px"/>
            <div class="text-caption" style="width:40px; text-align:right">{{ (zoom*100).toFixed(0) }}%</div>
          </div>
        </v-card-text>
      </v-card>

      <div v-if="hasPreview" ref="previewViewport" class="preview-viewport">
        <div ref="previewEl" class="preview-inner" :style="{'--zoom': zoom}"></div>
      </div>

      <v-alert v-else type="info" variant="tonal">
        Gere a prévia para visualizar o contrato com paginação aqui ao lado.
      </v-alert>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
import { renderAsync } from 'docx-preview'
import '@/assets/css/docx-preview.css'

/** props padrão para todos os campos */
const fProps = {
  variant: 'outlined',
  hideDetails: 'auto',
  density: 'comfortable',
}

const form = ref({
  // CONTRATANTE
  nome: '', cpf: '', endereco: '', num: '', comp: '', cep: '',
  bairro: '', cidade: '', uf: '', telefone: '', email: '',
  // QUADRO RESUMO / EVENTO
  equipamento: '', evento: '',
  data_evento: '', inicio_evento: '', termino_evento: '',
  qtd_horas_evento: '', local_evento: '', cidade_evento: '',
  servico_evento: '', valor_evento: '', desconto_evento: '', brinde_evento: '',
  autorizacao_publicacao: 'nao', // sim | nao
  // MONTAGEM / DESMONTAGEM
  data_montagem: '', inicio_montagem: '',
  data_desmontagem: '', inicio_desmontagem: '',
  // ASSINATURA
  data_contrato: '',
})

const loading = ref(false)
const arrayBufferModelo = ref(null)
const previewEl = ref(null)
const previewViewport = ref(null)
const hasPreview = ref(false)
const totalPages = ref(0)
const currentPage = ref(1)
const zoom = ref(1)
const scrollHandler = ref(null)

async function carregarModelo () {
  const resp = await fetch('/modelo-contrato-2.docx')
  if (!resp.ok) throw new Error('Não foi possível carregar o modelo')
  arrayBufferModelo.value = await resp.arrayBuffer()
}
onMounted(() => { carregarModelo().catch(console.error) })

const valorEventoBRL = computed(() => {
  const v = (form.value.valor_evento || '').toString().replace(/[^\d,.-]/g, '').replace(',', '.')
  const n = Number(v)
  if (isNaN(n)) return form.value.valor_evento || ''
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)
})
const descontoEventoBRL = computed(() => {
  const v = (form.value.desconto_evento || '').toString().replace(/[^\d,.-]/g, '').replace(',', '.')
  const n = Number(v)
  if (isNaN(n)) return form.value.desconto_evento || ''
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)
})

function setTemplateData (doc) {
  doc.setData({
    // CONTRATANTE
    nome: form.value.nome,
    cpf: form.value.cpf,
    endereco: form.value.endereco,
    num: form.value.num,
    comp: form.value.comp,
    cep: form.value.cep,
    bairro: form.value.bairro,
    cidade: form.value.cidade,
    uf: form.value.uf,
    telefone: form.value.telefone,
    email: form.value.email,

    // QUADRO RESUMO / EVENTO
    equipamento: form.value.equipamento,
    evento: form.value.evento,
    data_evento: form.value.data_evento,
    inicio_evento: form.value.inicio_evento,
    termino_evento: form.value.termino_evento,
    qtd_horas_evento: form.value.qtd_horas_evento,
    local_evento: form.value.local_evento,
    cidade_evento: form.value.cidade_evento,
    servico_evento: form.value.servico_evento,
    valor_evento: valorEventoBRL.value,
    desconto_evento: descontoEventoBRL.value,
    brinde_evento: form.value.brinde_evento,
    publicar_sim: form.value.autorizacao_publicacao === 'sim' ? 'X' : '',
    publicar_nao: form.value.autorizacao_publicacao === 'nao' ? 'X' : '',

    // MONTAGEM / DESMONTAGEM
    data_montagem: form.value.data_montagem,
    inicio_montagem: form.value.inicio_montagem,
    data_desmontagem: form.value.data_desmontagem,
    inicio_desmontagem: form.value.inicio_desmontagem,

    // ASSINATURA
    data_contrato: form.value.data_contrato,
  })
}

function countPages () {
  totalPages.value = previewEl.value?.querySelectorAll('.docx-page')?.length || 0
  currentPage.value = totalPages.value ? 1 : 0
}
function goToPage (n) {
  const pages = previewEl.value?.querySelectorAll('.docx-page')
  if (!pages || !pages.length) return
  const idx = Math.min(Math.max(1, n), pages.length) - 1
  const target = pages[idx]
  const container = previewViewport.value
  const top = target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop
  container.scrollTo({ top, behavior: 'smooth' })
  currentPage.value = idx + 1
}
function goPrev(){ goToPage(currentPage.value - 1) }
function goNext(){ goToPage(currentPage.value + 1) }

async function gerarContrato () {
  try {
    loading.value = true
    if (!arrayBufferModelo.value) await carregarModelo()

    const zip = new PizZip(arrayBufferModelo.value)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true, linebreaks: true, delimiters: { start: '[[', end: ']]' }
    })
    setTemplateData(doc)
    doc.render()

    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })
    const nomeArquivo = form.value.nome?.trim() ? `Contrato - ${form.value.nome}.docx` : 'Contrato.docx'
    saveAs(out, nomeArquivo)
  } catch (e) {
    console.error(e)
    alert('Erro ao gerar o contrato. Revise as tags do modelo (.docx).')
  } finally {
    loading.value = false
  }
}

async function gerarPreview () {
  try {
    loading.value = true
    if (!arrayBufferModelo.value) await carregarModelo()

    const zip = new PizZip(arrayBufferModelo.value)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true, linebreaks: true, delimiters: { start: '[[', end: ']]' }
    })
    setTemplateData(doc)
    doc.render()

    const filledAB = doc.getZip().generate({ type: 'arraybuffer' })

    // garante que o container existe
    hasPreview.value = true
    await nextTick()

    previewEl.value.innerHTML = ''
    await renderAsync(filledAB, previewEl.value, null, {
      inWrapper: true,
      ignoreFonts: false,
      breakPages: true,
      experimental: true,
      className: 'docx',
      trimXmlDeclaration: true,
    })

    countPages()

    // scroll handler (atualiza página atual)
    if (scrollHandler.value && previewViewport.value) {
      previewViewport.value.removeEventListener('scroll', scrollHandler.value)
    }
    scrollHandler.value = () => {
      const pages = previewEl.value?.querySelectorAll('.docx-page') || []
      const contRect = previewViewport.value.getBoundingClientRect()
      let closest = 1, min = Infinity
      pages.forEach((p, i) => {
        const d = Math.abs(p.getBoundingClientRect().top - contRect.top)
        if (d < min) { min = d; closest = i + 1 }
      })
      currentPage.value = closest
    }
    previewViewport.value?.addEventListener('scroll', scrollHandler.value, { passive: true })
  } catch (e) {
    console.error(e)
    alert('Erro ao gerar prévia paginada.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.preview-viewport{
  height: 78vh;
  overflow: auto;
  background: #f6f7fb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
}
.preview-inner .docx-page{
  margin: 14px auto !important;
  box-shadow: 0 6px 24px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #fff;
}
.preview-inner .docx-wrapper{
  //transform: scale(1);
  transform-origin: top center;
}
.preview-inner{
  -webkit-font-smoothing: antialiased;
  font-kerning: normal;
}
</style>
