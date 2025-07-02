export function UrgencyNotice() {
  const title = "ATENÇÃO: Vagas limitadas para mulheres 60+ nesta turma"
  const subtitle = "(Para eu conseguir dar atenção individualizada a cada aluna)"

  return (
    <div className="mt-6 bg-white/10 border border-white/20 text-white rounded-lg p-4 text-center backdrop-blur-sm">
      <p className="font-bold text-lg">{title}</p>
      <p className="text-sm mt-1 opacity-80">{subtitle}</p>
    </div>
  )
}
